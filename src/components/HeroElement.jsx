import React, { useEffect } from 'react'
import piliCoconutImg from "../assets/images/products/pili_coconut.webp"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroElement = () => {
    gsap.registerPlugin(ScrollTrigger);
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
            x: '-28%',
            y: '-15%',
            width: '85%',
            rotateZ: -25,
          })
          .to("#heroElement", {
            x: '50%',
            y: '-10%',
            width: '50%',
            rotateZ: 0,
          }, "+=0.1")
          
    
    },[])
    
  return (
    <div id='heroElement' className='pointer-events-none perspective-[1000px] h-screen w-full fixed top-0 left-0 z-[10]'>
        <img className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] absolute bottom-[5%] left-[50%] -translate-x-1/2 w-[24%] object-cover' src={piliCoconutImg} alt="pili nut coconut" />
    </div>
  )
}

export default HeroElement