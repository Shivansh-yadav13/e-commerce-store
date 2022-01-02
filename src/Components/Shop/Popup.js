import React from 'react'

/* Icons */
import { BsCart4 } from 'react-icons/bs'
import { BsFillSuitHeartFill } from 'react-icons/bs'
/* ----- */

const Popup = ({ name, desc, size, price, img, category, id, active }) => {

    if (active === true) {
        return (
            <div className="flex w-screen h-screen z-10 text-color-base bg-shade">
                <section>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='opacity-50 text-2xl font-bold'>{category}</p>
                    <p className='text-md font-light opacity-50'>{desc}</p>
                    <p className='text-sm font-bold'><span className='opacity-50'>Size: </span>{size}</p>
                </section>
                <section>
                    <img src={img} alt="" />
                    <h1 className='text-xl font-extrabold'>Rs. {price}</h1>
                    <div className='flex justify-around text-color-base text-4xl'>
                        <button className='p-2 mt-auto hover:text-color-main hidden'><BsCart4 /></button>
                        <button className='p-2 mt-auto hover:text-color-main'><BsCart4 /></button>
                        <button id="fav-off" className='p-2 text-color-main hidden'><BsFillSuitHeartFill /></button>
                        <button id="fav-on" className='p-2 hover:text-color-main'><BsFillSuitHeartFill /></button>
                    </div>
                    <button className='border w-40 text-color-base hover:bg-base hover:text-color-shade'>Purchase</button>
                </section>
            </div>
        )
    } else {
        return (
            <div className='hidden'>
            </div>
        )
    }
}

export default Popup