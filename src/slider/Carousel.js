import React from 'react'
import SmallCard from '../components/SmallCard';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react"
import News from '../components/News';
function Carousel() {
    const slRef = useRef(null);
    const [slide, setslide] = useState(2)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: slide,
        slidesToScroll: 1
    };
    useEffect(() => {
        if (window.innerWidth < 1100) {
            setslide(1)
        }
    }, [window.innerWidth])
    return (
        <>
            <div className="flex justify-center my-5 flex-wrap ">
                <div className="hidden md:block self-center cursor-pointer" onClick={()=>slRef.current.slickPrev()}>
                    <svg  className="self-center w-10 h-10 text-[#2166a7] sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4" d="M15 19l-7-7 7-7" ></path></svg>
                </div>
                <div className='md:w-[50%] w-full '>
                    <h1 className='md:text-4xl text-3xl text-orange-500 font-bold mb-5 text-center '>LATEST NEWS</h1>
                    <Slider ref={slRef} {...settings} className="m-[10px] sm:ml-[12px] md:ml-0 lg:ml-[12px] ">
                        <div className='text-center md:ml-2'>
                            <SmallCard />
                        </div>
                        <div className='text-center md:ml-2'>
                            <SmallCard />
                        </div>
                        <div className='text-center md:ml-2'>
                            <SmallCard />
                        </div>
                    </Slider>
                </div>
                <div className="hidden md:block self-center md:mr-6 cursor-pointer pr-[20px] sm:pr-[22px] md:pr-[30px] lg:pr-[22px]" onClick={()=>slRef.current.slickNext()}>
                    <svg  className="self-center w-10 h-10 text-[#2166a7] sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4" d="M9 5l7 7-7 7"></path></svg></div>
                <div className='md:w-4/12 md:my-0 my-6 w-12/12  flex-col justify-center'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-5 text-center text-orange-500'>NOTICE</h1>
                    <News />
                </div>
            </div>
        </>
    )
}

export default Carousel;