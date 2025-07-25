import React, { useEffect } from 'react'
import piliCoconutImg from "../assets/images/products/pili_coconut.webp"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from 'react';
import { PHContext } from '../context/PHContextProviders';

const HeroElement = () => {
    gsap.registerPlugin(ScrollTrigger);
    const {isMobile} = useContext(PHContext);
    console.log(isMobile);
    useEffect(()=>{
            const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#heroElement",
              start: "top top",
              endTrigger: "#productShowcase",
              end: "end 0%",
              scrub: 0.5,
            //   markers: true,
            }
          });
          
          tl.to("#heroElement", {
            x: isMobile ? '0%' : '-28%',
            y: isMobile ? '0%' : '-15%',
            width: isMobile ? '100%' : '85%',
            rotateZ: isMobile ? 0 : -25,
          })
          .to("#heroElement", {
            x: isMobile ? '50%' : '50%',
            y: isMobile ? '-10%' : '-10%',
            width: isMobile ? '50%' : '50%',
            rotateZ: isMobile ? 0 : 0,
          }, "+=0.1")
        }
    ,[isMobile])
    
  return (
    <div id='heroElement' className='pointer-events-none perspective-[1000px] h-screen w-[100vw] absolute md:fixed top-0 left-0 z-[10] overflow-hidden'>
        <img className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] absolute bottom-[37%] md:bottom-[5%] left-[50%] -translate-x-1/2 w-[50%] md:w-[24%] object-cover' src={piliCoconutImg} alt="pili nut coconut" />
    </div>
  )
}

export default HeroElement