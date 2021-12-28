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
        if (e === '') {
            navigate('/')
        }
        navigate(`search/?term=${searchTerm}`)
    }

    const handleSelect = id => {
        setSearchTerm("")
        navigate(`selected_item/?item_id=${id}`)
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
        <>
            <form className='flex p-3 ' onSubmit={handleSubmit}>
                <FaSearch className='relative mt-5'/>
                <input
                    className='px-4 focus:outline-none border-b'
                    type="text"
                    value={searchTerm}
                    placeholder='Search Products...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            {
                autoComplete && (
                    <ul className=''>
                        {autoComplete.map((item) => {
                            return (
                                <li
                                    key={item._id}
                                    className='cursor-pointer'
                                    onClick={() => handleSelect(item._id)}
                                >
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </>
    )
}

export default Search