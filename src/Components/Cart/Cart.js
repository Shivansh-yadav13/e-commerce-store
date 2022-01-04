import React, { useState, useEffect } from 'react'

/* Icons */
import { BsCart4 } from 'react-icons/bs'
/* ----- */

const Cart = ({ id }) => {
    const [btnClass, setBtnClass] = useState(`btn-${id} p-2 mt-auto text-color-shade hover:text-color-main`)
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []

    const findItemInCart = () => {
        if (cartItems.length != 0) {
            console.log(cartItems, cartItems.length)
            for (let i=0; i<cartItems.length; i++) {
                if (cartItems[i] == id) {
                    console.log('breaking out!')
                    setBtnClass(`btn-${id} p-2 mt-auto text-color-main`)
                }
            }
        }
    }
    
    useEffect(() => {
        findItemInCart()
    }, [])

    const addToCard = () => {
        let cartData = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []
        cartData.sort()
        cartData.push(id)
        sessionStorage.setItem("cartItems", JSON.stringify(cartData));
        document.querySelector(`.btn-${id}`).className = `btn-${id} p-2 mt-auto text-color-main`
        console.log(cartData)
    }

    return (
        <>
            <button className={btnClass} onClick={addToCard}>
                <BsCart4 />
            </button>
        </>
    )
}

export default Cart