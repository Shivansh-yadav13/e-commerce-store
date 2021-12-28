import React, { useState } from 'react'

/* Images Data & Icons */
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { CarouselData } from './CarouselData'
/* ---------- */

function Carousel() {
    const [active, setActive] = useState(0)
    const length = CarouselData.length

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1)
    }

    const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1)
    }

    return (
        <section className='flex relative justify-center'>
        {/* items-center  h-screen */}
            <IoMdArrowDropleft onClick={prevSlide} className='absolute top-2/4 left-32 text-5xl text-color-base drop-shadow-md cursor-pointer z-10 select-none'/>
            <IoMdArrowDropright onClick={nextSlide} className='absolute top-2/4 right-32 text-5xl text-color-base drop-shadow-md cursor-pointer z-10 select-none'/>
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === active ? 'slide active' : 'slide'} key={index}>
                        {index === active && (<img className='w-screen max-h-96 object-cover' src={slide.image} alt="photos" />)}
                    </div>
                )
            })}
        </section>
    )
}

export default Carousel