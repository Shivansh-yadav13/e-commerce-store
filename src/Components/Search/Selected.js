import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Realm from 'realm-web'

/* React Components */
/* ----------------- */

/* Icons & Images */
import { BsCart4, BsFillSuitHeartFill } from 'react-icons/bs'
/* ----------------- */

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Selected() {
    let query = useQuery();
    const [Items, setItems] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const getdata = async () => {
            const app = new Realm.App(({ id: process.env.REACT_APP_REALM_ID }))
            const credentials = Realm.Credentials.anonymous()
            try {
                const user = await app.logIn(credentials)
                const selectedItems = await user.functions.getOneItem(query.get("item_id"))
                setItems(selectedItems)
            } catch (error) {
                setItems("No such Products")
                console.error(error)
            }
        }
        getdata()
    }, [query])
    return (
        <div className='mobile:text-center mt-10 grid place-items-center h-screen'>
            {Items
                ?
                <div className='mobile:flex-col mobile:text-center flex gap-x-52 laptop:gap-x-10 text-right transition-all duration-300'>
                    <img className='mobile:mx-auto object-cover h-image w-image' src="https://source.unsplash.com/700x900/?cloths" alt="" />
                    <div className='mt-10'>
                        <p className='text-6xl laptop:text-5xl font-bold opacity-50'>{Items.category}</p>
                        <h1 className='text-5xl laptop:text-4xl font-extrabold '>{Items.name}</h1>
                        <p className='opacity-70 text-xl'>{Items.desc}</p>
                        <p className='opacity-70 text-xl'>Size: {Items.size}</p>
                        <p className='opacity-70 mt-5 text-4xl'>₹{Items.price}</p>
                        <div className='mt-5 text-4xl'>
                            <button className='p-2 mt-auto text-color-main hover:text-color-main hidden'><BsCart4 /></button>
                            <button className='p-2 mt-auto hover:text-color-main'><BsCart4 /></button>
                            <button id="fav-off" className='p-2 text-color-main hidden'><BsFillSuitHeartFill /></button>
                            <button id="fav-on" className='p-2 text-color-shade hover:text-color-main'><BsFillSuitHeartFill /></button>
                        </div>
                        <div className="">
                            <button className='relative top-4 border px-5 py-2 bg-base text-color-shade duration-300 transition-all hover:bg-shade hover:text-color-base'>Purchase</button>
                        </div>
                    </div>
                </div>
                :
                <h1 className='text-center'>No Such Products</h1>
            }
            <div className="mt-10 text-center">
                <button onClick={() => { navigate('/shop') }} className='hover:underline'>Go Back</button>
            </div>
        </div>
    )
}

export default Selected