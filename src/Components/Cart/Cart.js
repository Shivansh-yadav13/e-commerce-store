import React, { useState } from 'react'

/* Icons */
import { BsCart4 } from 'react-icons/bs'
/* ----- */

const Cart = ({ id, name, price }) => {
    const [render, setRender] = useState(false)
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []
    let btnClass = `btn-${id} p-2 mt-auto text-color-shade hover:text-color-main`

    const findItemInCart = () => {
        if (cartItems.length !== 0) {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i] == id) {
                    btnClass = `btn-${id} p-2 mt-auto text-color-main`
                }
            }
        }
    }

    const handleCartClick = () => {
        let cartData = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []
        let cartDataNames = JSON.parse(sessionStorage.getItem("cartItemsNames")) ? JSON.parse(sessionStorage.getItem("cartItemsNames")) : []
        let cartDataPrices = JSON.parse(sessionStorage.getItem("cartItemsPrices")) ? JSON.parse(sessionStorage.getItem("cartItemsPrices")) : []
        const selectedItem_Index = cartData.indexOf(`${id}`)

        /* Removing items from the cart */
        if (selectedItem_Index >= 0) {
            cartData.splice(selectedItem_Index, 1)
            cartDataNames.splice(selectedItem_Index, 1)
            cartDataPrices.splice(selectedItem_Index, 1)
            sessionStorage.setItem("cartItems", JSON.stringify(cartData))
            sessionStorage.setItem("cartItemsNames", JSON.stringify(cartDataNames))
            sessionStorage.setItem("cartItemsPrices", JSON.stringify(cartDataPrices))
        } else {
            /* Adding items in the cart */
            cartData.push(id)
            cartDataNames.push(name)
            cartDataPrices.push(price)
            sessionStorage.setItem("cartItems", JSON.stringify(cartData))
            sessionStorage.setItem("cartItemsNames", JSON.stringify(cartDataNames))
            sessionStorage.setItem("cartItemsPrices", JSON.stringify(cartDataPrices))
        }
        let tempTotal = 0
        for (let i = 0; i < cartDataPrices.length; i++) {
            tempTotal += cartDataPrices[i]
        }
        sessionStorage.setItem("cartTotalPrice", JSON.stringify(tempTotal))
        setRender(!render)
    }

    findItemInCart()

    return (
        <>
            <button className={btnClass} onClick={handleCartClick}>
                <BsCart4 />
            </button>
        </>
    )
}


export default Cart