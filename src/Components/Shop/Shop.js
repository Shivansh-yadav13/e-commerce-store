import React, { useEffect, useState } from 'react'
import * as Realm from 'realm-web'

/* React Components */
import Item from './Item'
/* ----------------- */

function Shop() {

    const [Items, setItems] = useState([])

    useEffect(() => {
        const getdata = async () => {
            const app = new Realm.App(({ id: process.env.REACT_APP_REALM_ID }))
            const credentials = Realm.Credentials.anonymous()
            try {
                const user = await app.logIn(credentials)
                const allItems = await user.functions.getAllItems()
                setItems(allItems)
            } catch (error) {
                console.error(error)
            }
        }
        getdata()
    }, [])
    return (
        <div>
            <h1>SHOP</h1>
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
                <h1>No Products</h1>
            }
        </div>
    )
}

export default Shop