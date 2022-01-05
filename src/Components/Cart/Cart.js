import React, { useState, useEffect } from 'react'

/* Icons */
import { BsCart4 } from 'react-icons/bs'
/* ----- */

const Cart = ({ id }) => {
    const [btnClass, setBtnClass] = useState(`btn-${id} p-2 mt-auto text-color-shade hover:text-color-main`)
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []

    const findItemInCart = () => {
        if (cartItems.length !== 0) {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i] == id) {
                    setBtnClass(`btn-${id} p-2 mt-auto text-color-main`)
                }
            }
        }
    }

    const addToCard = () => {
        let cartData = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []
        let cartDataTimes = JSON.parse(sessionStorage.getItem("cartItemsTimes")) ? JSON.parse(sessionStorage.getItem("cartItemsTimes")) : []
        let selectedItem = document.querySelector(`.btn-${id}`)
        /* Removing items from the cart */
        if (selectedItem.className == `btn-${id} p-2 mt-auto text-color-main`) {
            const selectedItem_Index =  cartData.indexOf(`${id}`)
            if (selectedItem_Index > -1) {
                cartData.splice(selectedItem_Index, 1)
                cartDataTimes.splice(selectedItem_Index, 1)
                sessionStorage.setItem("cartItems", JSON.stringify(cartData))
                sessionStorage.setItem("cartItemsTimes", JSON.stringify(cartDataTimes))
                selectedItem.className = `btn-${id} p-2 mt-auto text-color-shade hover:text-color-main`
                return
            }
        }
        /* Adding items in the cart */
        cartData.push(id)
        cartDataTimes.push(1)
        sessionStorage.setItem("cartItems", JSON.stringify(cartData))
        sessionStorage.setItem("cartItemsTimes", JSON.stringify(cartDataTimes))
        selectedItem.className = `btn-${id} p-2 mt-auto text-color-main`
    }

    useEffect(() => {
        findItemInCart()
    }, [])

    return (
        <>
            <button className={btnClass} onClick={addToCard}>
                <BsCart4 />
            </button>
        </>
    )
}

export default Cart