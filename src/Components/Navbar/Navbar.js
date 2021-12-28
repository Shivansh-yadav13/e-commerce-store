import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

/* Images & Icons */
import logo from '../../assets/images/twg_logo.png'
import { IoHome } from 'react-icons/io5'
import { GiShoppingBag } from 'react-icons/gi'
import { BiMessageAltDetail } from 'react-icons/bi'
/* ------ */

/* React Components */
import Search from './Search'
/* --------------- */

function Navbar() {
    const {
        isLoading,
        isAuthenticated,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();


    return (
        <nav className='flex justify-between bg-color-base drop-shadow-md py-2 text-lg'>
            <img
                src={logo}
                alt=''
                className='w-2/12 select-none mt-3 h-fit mx-3 mobile:hidden tablet:hidden'
            />
            {/* Links */}
            <div className="mobile:hidden">
                <div className="grid grid-cols-3 gap-x-20 mt-5">
                    <Link to='/' className='w-fit hover:border-b'>
                        <IoHome className='mx-auto text-3xl'/>
                        Home
                    </Link>
                    <Link to='/shop' className='w-fit hover:border-b'>
                        <GiShoppingBag className='mx-auto text-3xl'/>
                        Shop
                    </Link>
                    <Link to='/contact' className=' w-fit text-center hover:border-b'>
                        <BiMessageAltDetail className='mx-auto text-3xl'/>
                        Contact
                    </Link>
                </div>
            </div>
            {/* ----- */}
            <div className="flex mx-3">
                <Search />
                {user ?
                    isLoading ?
                        <div>
                            <h1 className='font-bold'>Loding...</h1>
                        </div>
                        :
                        (isAuthenticated &&
                            <div className='mx-2'>
                                <img className='w-12' src={user.picture} alt='user-profile' />
                                <button className="bg-color-base-400 mx-5 p-2" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                            </div>
                        )
                    :
                    <div className="user-tab flex">
                        <button className="border text-color-shade mx-5 px-10 hover:bg-shade hover:text-color-base" onClick={() => loginWithRedirect()}>Login</button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar