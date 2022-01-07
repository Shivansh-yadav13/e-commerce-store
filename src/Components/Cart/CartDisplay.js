import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

/* Icons */
import { AiOutlineClose } from 'react-icons/ai'
/* ------ */

const CartDisplay = () => {
    const [cartActive, setCartActive] = useState(false)
    const [render, setRender] = useState(false)
    const navigate = useNavigate()

    const onCartClick = () => {
        const cartEl = document.querySelector(".cart-open")
        if (cartActive) {
            cartEl.classList.add("hidden")
        } else {
            cartEl.classList.remove("hidden")
        }
        setCartActive(!cartActive)
    }

    const removeItem = (key) => {
        let cartData = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : []
        let cartDataNames = JSON.parse(sessionStorage.getItem("cartItemsNames")) ? JSON.parse(sessionStorage.getItem("cartItemsNames")) : []
        let cartDataPrices = JSON.parse(sessionStorage.getItem("cartItemsPrices")) ? JSON.parse(sessionStorage.getItem("cartItemsPrices")) : []

        cartData.splice(key, 1)
        cartDataNames.splice(key, 1)
        cartDataPrices.splice(key, 1)

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

    useEffect(() => {
        let cartDataPrices = JSON.parse(sessionStorage.getItem("cartItemsPrices")) ? JSON.parse(sessionStorage.getItem("cartItemsPrices")) : []
        let tempTotal = 0
        for (let i = 0; i < cartDataPrices.length; i++) {
            tempTotal += cartDataPrices[i]
        }
        sessionStorage.setItem("cartTotalPrice", JSON.stringify(tempTotal))
    }, [])

    return (
        <div className="flex justify-end ml-auto sticky bottom-0">
            <div
                className="bg-shade cursor-pointer text-center text-base drop-shadow-lg rounded-md border text-xl font-bold m-4 px-5 py-3 z-20 mobile:grow">
                <h1 onClick={onCartClick}>CART
                    {sessionStorage.getItem("cartItems") ? JSON.parse(sessionStorage.getItem("cartItems")).length > 0 ? "(" + "x " + (JSON.parse(sessionStorage.getItem("cartItems"))).length + ")" : "" : ""}
                </h1>
                <div className="cart-open flex gap-5">
                    <div className="list-none text-left transition-all duration-300">
                        {JSON.parse(sessionStorage.getItem("cartItems")) ?
                            JSON.parse(sessionStorage.getItem("cartItemsNames")).map((items, key) => (
                                <li className="flex"
                                    key={key}>
                                    <AiOutlineClose className="my-auto bg-base rounded-sm text-shade mx-2" onClick={() => removeItem(key)} />
                                    {items}
                                </li>
                            ))
                            : ""
                        }
                    </div>
                    <div className="list-none text-left transition-all duration-300">
                        {JSON.parse(sessionStorage.getItem("cartItems")) ?
                            JSON.parse(sessionStorage.getItem("cartItemsPrices")).map((items, key) => (
                                <li className=""
                                    key={key}>
                                    ₹{items}
                                </li>
                            ))
                            : ""
                        }
                    </div>
                </div>
                {JSON.parse(sessionStorage.getItem("cartTotalPrice")) ?
                    <div className="flex justify-around">
                        <h1 className="p-2">Total: ₹{
                            JSON.parse(sessionStorage.getItem("cartTotalPrice"))
                        }</h1>
                        <button onClick={() => {navigate("/user-cart-items")}} className="p-2 hover:bg-main hover:font-bold rounded-sm">Buy Now</button>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default CartDisplay