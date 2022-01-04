import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/* React Components */
import Cart from '../Cart/Cart'
/* --------------- */

/* Icons */
import { BsFillSuitHeartFill } from 'react-icons/bs'
/* ----- */

function Item({ name, size, price, img, category, id }) {

    const navigate = useNavigate()


    const handleItemClick = () => {
        navigate(`/selected_item/?item_id=${id}`)
    }

    return (
        <>
            <div className='w-fit text-left text-sm p-2 list-none cursor-pointer transition-all duration-300 hover:scale-105'>
                <div className="h-image w-image" onClick={handleItemClick}>
                    <img className='class-1 object-cover h-image w-image' src='https://source.unsplash.com/700x900/?cloths' alt='' />
                    <div className="class-2">
                        <h1>SHOW</h1>
                    </div>
                </div>
                <li className='opacity-50'>{category ? category : "-"}</li>
                <ul className='flex justify-between'>
                    <p onClick={handleItemClick} className='hover:underline'>{name}</p>
                    <li>{size}</li>
                </ul>
                <ul className='' >
                    <li className='mt-auto'>Rs.{price}</li>
                    <div>
                        <Cart id={id}/>
                        <button id="fav-off" className='p-2 text-color-main hidden'><BsFillSuitHeartFill /></button>
                        <button id="fav-on" className='p-2 text-color-shade hover:text-color-main'><BsFillSuitHeartFill /></button>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Item