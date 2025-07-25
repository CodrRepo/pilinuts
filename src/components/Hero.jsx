import React from 'react'
import piliCoconutImg from "../assets/images/products/pili_coconut.webp"
import singlePiliNutImg from "../assets/images/decoratives/single_pilinut.png"
import singlePiliNutUnbreakImg from "../assets/images/decoratives/single_pilinut_unbreak.png"
import singlePiliNutUnbreak2Img from "../assets/images/decoratives/single_pilinut_unbreak2.png"
import rawRiceImg from "../assets/images/decoratives/raw_rice.png"
import ancientClayImg from "../assets/images/decoratives/ancient_clay.png"
import whitePiliNutImg from "../assets/images/decoratives/white_pilinut.png"
import whitePiliNut2Img from "../assets/images/decoratives/white_pilinut2.png"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all'
import usePiliDecoratorParallax from '../animations/usePiliDecoratorParallax'
import useSlideUpAnimation from '../animations/useSlideUpAnimation'

const Hero = () => {


    const piliNutsData = [
        {
            x: "35%",
            y: "40%",
            rotate: 150,
            size: "6rem",
            blur: 0,
            z: 5,
            moveSpeed: -0.1,
            src: singlePiliNutUnbreakImg
        },
        {
            x: "65%",
            y: "50%",
            rotate: 50,
            size: "6rem",
            blur: 0,
            z: 5,
            moveSpeed: -0.2,
            src: singlePiliNutUnbreakImg
        },
        {
            x: "85%",
            y: "30%",
            rotate: 0,
            size: "2rem",
            blur: 0,
            z: 5,
            moveSpeed: -0.2,
            src: whitePiliNutImg
        },
        {
            x: "10%",
            y: "70%",
            rotate: 0,
            size: "4rem",
            blur: 0,
            z: 5,
            moveSpeed: -0.3,
            src: whitePiliNut2Img
        },
        {
            x: "35%",
            y: "50%",
            rotate: 0,
            size: "2rem",
            blur: 0,
            z: 5,
            moveSpeed: -0.3,
            src: whitePiliNutImg
        },
        {
            x: "30%",
            y: "80%",
            rotate: -15,
            size: "9rem",
            blur: 0.5,
            z: 30,
            moveSpeed: -0.4,
            src: singlePiliNutImg
        },
        {
            x: "60%",
            y: "85%",
            rotate: 0,
            size: "15rem",
            blur: 2,
            z: 30,
            moveSpeed: -0.4,
            src: singlePiliNutImg
        },
    ]

    useSlideUpAnimation(".hero-slide-up-heading", ".hero-slide-up-heading", "100%");
    // const decoratorsRef = usePiliDecoratorParallax();




    return (
        <div id='hero' className='relative h-screen overflow-hidden w-full bg-[var(--primary-color)]'>
            <div className='h-[93vh] md:h-fit flex flex-col justify-between py-[10rem] md:py-0 absolute  px-[2rem] w-full  bottom-[0.5rem] left-[50%] -translate-x-1/2 whitespace-nowrap z-[5] text-white'>
                <h1 className='hero-slide-up-heading secondary-font leading-none text-[2.5rem] md:text-[1.3rem] font-[300] text-right overflow-hidden'>We are on Shark Tank
                    <a href="#" className='inline-block ml-[0.5rem] aspect-square border-[1px] border-white px-[0.1rem] rounded-md'><i className="ri-arrow-right-up-line mt-[0.1rem]"></i></a></h1>
                <h1 className='hero-slide-up-heading primary-font opacity-50 leading-none text-[13vw] text-wrap md:text-nowrap md:text-[8.2vw] font-bold overflow-hidden'>
                    Earth's Perfect nut.
                </h1>
            </div>
            <div className='absolute top-0 left-0 h-full w-full'>
                {
                    piliNutsData.map((item, index) => {
                        return (
                            <img data-scroll data-scroll-speed="0.2" key={index} style={{ left: item.x, top: item.y, width: item.size, filter: `blur(${item.blur}px) drop-shadow(0 3px 5px rgba(0,0,0,0.25))`, zIndex: item.z, transform: `rotate(${item.rotate}deg)` }} className={`decorators absolute -translate-1/2 w-[5rem]`} src={item.src} alt="" />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Hero