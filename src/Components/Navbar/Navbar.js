import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

/* Images & Icons */
import logo from '../../assets/images/twg_logo_2.png'
import { IoHome } from 'react-icons/io5'
import { GiShoppingBag } from 'react-icons/gi'
import { BiMessageAltDetail } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
/* ------ */

function Navbar() {
    const {
        isLoading,
        isAuthenticated,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const [menuSwtich, setMenuSwtich] = useState(false)

    const handleMenu = () => {
        let ham = document.querySelector('.ham-menu')
        let cross = document.querySelector('.close-menu')
        if (!menuSwtich) {
            ham.className += ' hidden'
            cross.className = cross.className.replace('hidden', ' ')
        } else {
            cross.className += ' hidden'
            ham.className = ham.className.replace('hidden', ' ')
        }
        setMenuSwtich(!menuSwtich)
    }

    return (
        <nav className='sticky top-0 z-20 backdrop-blur-sm bg-shade-fade flex justify-around text-color-base drop-shadow-md text-sm py-5 mobile:justify-between mobile-sm:justify-around mobile:py-5'>
            <img
                src={logo}
                alt=''
                className='w-52 select-none mt-auto mb-2 mx-3 mobile-sm:w-6/12'
            />
            {/* Links */}
            <div className="mobile:hidden">
                <div className="grid grid-cols-3 gap-x-20 mt-5 laptop:text-lg laptop:gap-x-10 tablet:gap-x-5">
                    <Link to='/' className='w-fit hover:underline'>
                        <IoHome className='mx-auto text-color-main' />
                        Home
                    </Link>
                    <Link to='/shop' className='w-fit hover:underline'>
                        <GiShoppingBag className='mx-auto text-color-main' />
                        Shop
                    </Link>
                    <Link to='/contact' className=' w-fit text-center hover:underline'>
                        <BiMessageAltDetail className='mx-auto text-color-main' />
                        Contact
                    </Link>
                </div>
            </div>
            {/* ----- */}
            <div className="flex mx-3 mobile:justify-around">
                <div className="hidden mobile:flex">
                    <div className="ham-menu mt-auto">
                        <button onClick={handleMenu}><GiHamburgerMenu className='text-3xl mx-3' /></button>
                    </div>
                    <div className="close-menu mt-auto hidden">
                        <button onClick={handleMenu}><AiOutlineClose className='text-3xl mx-3' /></button>
                    </div>
                </div>
                <div className="mobile:hidden">
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
                        <div className='flex'>
                            <button className="relative top-4 border px-5 py-2 bg-base text-color-shade duration-300 transition-all hover:bg-shade hover:text-color-base" onClick={() => loginWithRedirect()}>Login</button>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar