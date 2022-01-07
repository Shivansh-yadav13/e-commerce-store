import React from 'react'

const CartItem = ({ item }) => {
    return (
        <li className='flex justify-between cursor-pointer p-2 m-2 scale-90 transition-all duration-200'>
            <div>
                <h1 className='text-3xl'>{item[1]}</h1>
                <p className='text-2xl'>{item[0]}</p>
                <p className='text-xl'>{item[2]}</p>
                <p>Size: {item[4]}</p>
                <p className='text-3xl'>₹{item[5]}</p>
            </div>
            <img className='w-32 object-cover' src="https://source.unsplash.com/700x900/?cloths" alt="img" />
            {/* <p>{item[3]}</p> */}
        </li>
    )
}

export default CartItem