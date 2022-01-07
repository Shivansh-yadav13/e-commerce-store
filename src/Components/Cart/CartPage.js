import React, { useState, useEffect } from 'react'
import * as Realm from 'realm-web'
import { useNavigate } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

/* Icons & Images */
import Logo from '../../assets/images/Logo_round.png'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
/* -------------- */

import CartItem from './CartItem'

const CartPage = () => {
    const {
        isLoading,
        isAuthenticated,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const [render, setRender] = useState(false)
    const [totalAmt, setTotalAmt] = useState(9999999)
    const [finalCart, setFinalCart] = useState(null)
    let cartListIDs = JSON.parse(sessionStorage.getItem("cartItems")) ? JSON.parse(sessionStorage.getItem("cartItems")) : []

    const makeFinalCart = async () => {
        cartListIDs = JSON.parse(sessionStorage.getItem("cartItems")) ? JSON.parse(sessionStorage.getItem("cartItems")) : []
        let list = []
        let totalAmount = 0
        for (let i = 0; i < cartListIDs.length; i++) {
            const app = new Realm.App(({ id: process.env.REACT_APP_REALM_ID }))
            const credentials = Realm.Credentials.anonymous()
            try {
                const user = await app.logIn(credentials)
                const dbItem = await user.functions.getOneItem(cartListIDs[i])
                let object = [
                    dbItem.category,
                    dbItem.name,
                    dbItem.desc,
                    dbItem.img,
                    dbItem.size,
                    dbItem.price,
                    dbItem._id
                ]
                console.log(dbItem.price, totalAmount)
                totalAmount += dbItem.price
                console.log(totalAmount)
                list.push(object)
            } catch (error) {
                console.error(error)
            }
        }
        setFinalCart(list)
        setTotalAmt(totalAmount)
    }

    const handleRemove = (id) => {
        let cartData = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []
        let cartDataNames = JSON.parse(sessionStorage.getItem("cartItemsNames")) ? JSON.parse(sessionStorage.getItem("cartItemsNames")) : []
        let cartDataPrices = JSON.parse(sessionStorage.getItem("cartItemsPrices")) ? JSON.parse(sessionStorage.getItem("cartItemsPrices")) : []

        console.log(id)

        if (id >= 0) {
            cartData.splice(id, 1)
            cartDataNames.splice(id, 1)
            cartDataPrices.splice(id, 1)

            sessionStorage.setItem("cartItems", JSON.stringify(cartData))
            sessionStorage.setItem("cartItemsNames", JSON.stringify(cartDataNames))
            sessionStorage.setItem("cartItemsPrices", JSON.stringify(cartDataPrices))

            let tempTotal = 0
            for (let i = 0; i < cartDataPrices.length; i++) {
                tempTotal += cartDataPrices[i]
            }
            sessionStorage.setItem("cartTotalPrice", JSON.stringify(tempTotal))
            setRender(!render)
        }
    }

    useEffect(() => {
        makeFinalCart()
    }, [render])

    return (
        <div className='w-full'>
            <h1 className='text-center text-5xl font-bold px-8 m-8'>Your Cart</h1>
            <div className='flex flex-col mx-auto overflow-y-scroll h-96 border gap-10 w-10/12 text-left text-sm p-2 list-none'>
                {finalCart ?
                    finalCart.map((item, key) => (
                        <div className='flex flex-col hover:border hover:shadow-xl gap-x-5 text-2xl transition-all duration-150' key={key}>
                            <div className='item-btns flex justify-between'>
                                <AiOutlineClose className='m-2 hover:scale-150 transition-all duration-75 cursor-pointer' onClick={() => handleRemove(key)} />
                                <BsFillSuitHeartFill className='m-2 hover:scale-150 transition-all duration-75 cursor-pointer' />
                            </div>
                            <CartItem item={item} key={key} />
                        </div>
                    ))
                    :
                    <div className='w-full'>
                        <img src={Logo} className='animate-spin mx-auto' alt='logo' />
                    </div>
                }
            </div>
            <div>
                {
                    isAuthenticated ?
                        <div className='flex justify-between mx-auto mt-20 w-10/12'>
                            <div className='flex'>
                                <img className='mr-5' src={user.picture}></img>
                                <div className='flex flex-col gap-5'>
                                    <h1 className='text-3xl'>{user.nickname}</h1>
                                    <h1 className='text-xl'>{user.email}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-bold text-center'>Total Amount: ₹{totalAmt}</p>
                                {totalAmt
                                    ?
                                    <button className=' bg-base border text-color-shade p-2 hover:bg-shade hover:text-color-base'>
                                        Purchase
                                    </button>
                                    :
                                    <div className='animate-ping w-full m-20'>
                                        <h1 className='text-3xl font-bold text-center'>Add Items in the cart</h1>
                                    </div>
                                }
                            </div>
                        </div>
                        :
                        <h1 className='text-3xl m-20 font-bold text-color-red text-center'>Please login to buy from our store.</h1>
                }
            </div>
        </div>
    )
}

export default CartPage