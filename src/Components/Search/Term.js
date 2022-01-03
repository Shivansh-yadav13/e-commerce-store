import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as Realm from 'realm-web'

/* React Components */
import Item from '../Shop/Item'
/* ----------------- */

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Term() {
    let query = useQuery();
    const [Items, setItems] = useState()

    useEffect(() => {
        const getdata = async () => {
            const app = new Realm.App(({ id: process.env.REACT_APP_REALM_ID }))
            const credentials = Realm.Credentials.anonymous()
            try {
                const user = await app.logIn(credentials)
                const searchedItems = await user.functions.searchItems(query.get("term"))
                setItems(searchedItems)
            } catch (error) {
                console.error(error)
            }
        }
        getdata()
    }, [query])
    return (
        <div className="flex flex-col text-center justify-center">
            <h1 className='p-5 m-5 text-xl'>Search results for the term "{query.get('term')}"</h1>
            <div className="flex flex-wrap justify-center pb-10 mb-10">
                {Items ?
                    Items.map((list_item, key) => (
                        <Item
                            name={list_item.name}
                            desc={list_item.desc}
                            category={list_item.category ? list_item.category : ""}
                            size={list_item.size}
                            price={list_item.price}
                            img={list_item.img}
                            id={list_item._id}
                            key={key} />
                    ))
                    :
                    <h1>No Such Products</h1>
                }
            </div>
            <Link to='/shop' className='hover:underline text-xl'>Go Back</Link>
        </div>
    )
}

export default Term