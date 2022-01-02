import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Realm from 'realm-web'

/* Images & Icons */
import { FaSearch } from 'react-icons/fa'
/* ------ */

function Search() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const [autoComplete, setAutoComplete] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        setSearchTerm("")
        navigate(`/search/?term=${searchTerm}`)
    }

    const handleSelect = id => {
        setSearchTerm("")
        navigate(`/selected_item/?item_id=${id}`)
    }

    useEffect(() => {
        const getdata = async () => {
            const app = new Realm.App(({ id: process.env.REACT_APP_REALM_ID }))
            const credentials = Realm.Credentials.anonymous()
            try {
                const user = await app.logIn(credentials)
                const searchAutoComplete = await user.functions.searchAutoComplete(searchTerm)
                setAutoComplete(() => searchAutoComplete)
            } catch (error) {
                console.error(error)
            }
        }

        if (searchTerm.length) {
            getdata()
        } else {
            setAutoComplete()
        }
    }, [searchTerm])

    return (
        <div className='flex flex-col'>
            <form className='flex p-3' onSubmit={handleSubmit}>
                <button className='cursor-pointer' onClick={handleSubmit}>
                    <FaSearch className='mobile:mt-1' />
                </button>
                <input
                    className='px-4 focus:outline-none'
                    type="text"
                    value={searchTerm}
                    placeholder='Search Products...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            {
                autoComplete && (
                    <ul className='flex flex-col justify-center text-color-base bg-shade border'>
                        {autoComplete.map((item) => {
                            return (
                                <li
                                    key={item._id}
                                    className='text-center border-b cursor-pointer w-full opacity-50 hover:opacity-100'
                                    onClick={() => handleSelect(item._id)}
                                >
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </div>
    )
}

export default Search