import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/* React Components */
import Popup from './Popup'
/* --------------- */

/* Icons */
import { BsCart4 } from 'react-icons/bs'
import { BsFillSuitHeartFill } from 'react-icons/bs'
/* ----- */

function Item({ name, desc, size, price, img, category, id }) {

    const [itemActive, setItemActive] = useState(false)

    return (
        <>
            <div onClick={() => setItemActive(!itemActive)} className='text-left text-sm p-2 list-none cursor-pointer transition-all duration-300 hover:scale-105'>
                <div className="h-image w-image">
                    <img className='class-1 object-cover h-image w-image' src='https://source.unsplash.com/700x900/?cloths' alt='' />
                    <div className="class-2">
                        <h1>SHOW</h1>
                    </div>
                </div>
                <li className='opacity-50'>{category ? category : "-"}</li>
                <ul className='flex justify-between'>
                    <Link to="/item" className='hover:underline'>{name}</Link>
                    <li>{size}</li>
                </ul>
                <ul className='' >
                    <li className='mt-auto'>Rs.{price}</li>
                    <div>
                        <button className='p-2 mt-auto text-color-main hover:text-color-main hidden'><BsCart4 /></button>
                        <button className='p-2 mt-auto hover:text-color-main'><BsCart4 /></button>
                        <button id="fav-off" className='p-2 text-color-main hidden'><BsFillSuitHeartFill /></button>
                        <button id="fav-on" className='p-2 text-color-shade hover:text-color-main'><BsFillSuitHeartFill /></button>
                    </div>
                </ul>
            </div>
            <div className='absolute'>
                <Popup name={name} desc={desc} size={size} price={price} img={img} category={category} id={id} active={itemActive} />
            </div>
        </>
    )
}

export default Item