import React, { useState } from "react"

const CartDisplay = () => {
    const [cartActive, setCartActive] = useState(false)

    const onCartClick = () => {
        if (cartActive) {
            console.log('closing the cart!')
        } else {
            console.log('opening the cart!')
        }
        setCartActive(!cartActive)
    }

    return (
        <div className="flex justify-end ml-auto sticky bottom-0">
            <button 
            onClick={onCartClick}
            className="bg-shade text-base drop-shadow-lg rounded-full border text-xl font-bold m-4 px-5 py-3 z-20 mobile:grow">
                CART {sessionStorage.getItem("cartItems") ? "(" +"x " + (JSON.parse(sessionStorage.getItem("cartItems"))).length + ")" : ""}
            </button>
        </div>
    )
}

export default CartDisplay