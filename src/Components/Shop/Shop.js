import React, { useEffect, useState } from 'react'
import * as Realm from 'realm-web'

/* React Components */
import Item from './Item'
import Search from './Search'
import CartDisplay from '../Cart/CartDisplay'
/* ----------------- */

/* Images and Icons */
import Illustration from '../../assets/images/girls_illu.png'
/* ----------------- */

function Shop() {
    const [Items, setItems] = useState([])

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
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <div className='text-center place-self-center'>
                <div className='flex justify-center gap-10 bg-shade m-5 p-2'>
                    <img className='w-32 h-fit mt-auto mb-auto mobile:hidden' src={Illustration} alt="" />
                    <div className="text mt-auto mb-auto">
                        <h1 className='text-8xl drop-shadow-md mt-2 py-5 font-extrabold text-gradient bg-clip-text bg-gradient-to-br from-main to-base border'>SHOP</h1>
                    </div>
                    <img className='w-32 h-fit mt-auto mb-auto mobile:hidden' src={Illustration} alt="" />
                </div>
                <div className='flex flex-col mb-auto pb-20'>
                    <div className='flex justify-center my-2 py-2'>
                        <Search />
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        {Items ?
                            Items.map((list_item, key) => (
                                <Item
                                    name={list_item.name}
                                    desc={list_item.desc}
                                    category={list_item.category ? list_item.category : ''}
                                    size={list_item.size}
                                    price={list_item.price}
                                    img={list_item.img}
                                    id={list_item._id}
                                    key={key}
                                />
                            ))
                            :
                            <h1>No Products</h1>
                        }
                    </div>
                </div>
            </div>
            <CartDisplay/>
        </>
    )
}

export default Shop