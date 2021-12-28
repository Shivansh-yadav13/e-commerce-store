import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
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
                const selectedItems = await user.functions.getOneItem(query.get("item_id"))
                setItems(selectedItems)
            } catch (error) {
                console.error(error)
            }
        }
        getdata()
    }, [query])
    return (
        <div>
            {Items ?
                Items.map((list_item) => (
                    <Item
                        name={list_item.name}
                        desc={list_item.desc}
                        category={list_item.category ? list_item.category : ""}
                        size={list_item.size}
                        price={list_item.price}
                        img={list_item.img}
                        key={list_item._id} />
                ))
                :
                <h1>No Such Products</h1>
            }
            <h1>Go Back</h1>
        </div>
    )
}

export default Term