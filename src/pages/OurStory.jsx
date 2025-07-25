import React, { useContext, useEffect, useRef } from 'react'
import CircularGallery from '../partials/CircularGallery'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Testimonial from '../components/Testimonial';
import { PHContext } from '../context/PHContextProviders';
import useMaskUpAnimation from '../animations/useMaskUpAnimation';
import SplitText from 'gsap/SplitText';
import useSlideUpAnimation from '../animations/useSlideUpAnimation';


const OurStory = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const { showFooter, setShowFooter } = useContext(PHContext);
  const maskImg1 = useRef(null);
  const maskTrigger = useRef(null);
  
  useSlideUpAnimation(".story-jma-heading", ".story-jma-container", "80%");
  useSlideUpAnimation(".story-ph-heading", ".story-ph-container", "80%");
  useMaskUpAnimation(".story-maskup-para1");
  useMaskUpAnimation(".story-maskup-para2");
  
  useEffect(() => {
    setShowFooter(true);
    gsap.to(maskImg1.current, {
      scrollTrigger: {
        trigger: maskTrigger.current,
        start: "top 100%",
        end: "top 20%",
        scrub: 1,
        // markers: true,
      },
      clipPath: "inset(0% 0% 100% 0%)",
    });
    
    
    
  }, [showFooter]);

  return (
    <div className='relative w-full'>
      <div className='pb-[2rem] bg-[var(--primary-color)]'>
        <div className='w-full relative px-[2rem] pt-[15rem]'>
          <h2 className='primary-font text-[3rem] text-center leading-none text-white'>How It All Started</h2>
          <p className='secondary-font text-[1.3rem] opacity-50 px-[0.5rem] text-center w-[70%] mt-[1rem] mx-auto leading-none'>Meet Jason Thomas - a true explorer, renaissance man, and possibly one of the coolest people on the planet</p>
        </div>

        <div className='h-[80vh] w-full relative'>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div>


      <div className='relative flex justify-center gap-[5rem] w-full pt-[4rem] bg-white'>
        <div className='sticky top-[12%] w-[30%] h-[80vh] flex'>
          <img ref={maskImg1} className='absolute top-0 left-0 w-full h-full object-cover' src='https://eatpilinuts.com/cdn/shop/files/20181208_121947_0_1_800x.jpg?v=1663792086' alt="" />
          <img className='w-full h-full object-cover' src='https://eatpilinuts.com/cdn/shop/files/Pili_Jason_Holding_Nut_with_arrow_02_2_140e162a-beba-4755-bf33-e8c74a375305_2000x.jpg?v=1663003375' alt="" />
        </div>
        <div className='relative w-[35%]'>
          <div className='story-jma-container h-[80vh] w-full flex flex-col justify-center'>
            <h3 className='story-jma-heading text-[1.9rem] primary-font font-[600] text-[var(--primary-color)]'>Jason</h3>
            <h4 className='secondary-font text-[1rem] leading-none'>The founder of our family business</h4>
            <p className='story-maskup-para1 secondary-font text-[1.2rem] mt-[1rem]'>who grew up in Barrow, Alaska, spent his early life working on Arctic construction, hunting, and fishing with Native Alaskans. He later traveled the world extensively, experiencing diverse cultures and landscapes — from Alaska to Hawaii, Patagonia to Europe, Morocco to Southeast Asia. Along the way, he took on adventurous roles such as mountain guide, archaeologist’s assistant, glaciology field hand, fisherman, kite surfing instructor, and rock climber.</p>
          </div>

          <div ref={maskTrigger}  className='story-ph-container h-[80vh] w-full flex flex-col justify-center'>
            <h3 className='story-ph-heading overflow-hidden text-[1.9rem] primary-font font-[600] text-[var(--primary-color)]'>Enter the pili nut</h3>
            <h4 className='secondary-font text-[1rem] leading-none'>Jason's love for the Philippines</h4>
            <p className='story-maskup-para2 secondary-font text-[1.2rem] mt-[1rem]'>Jason discovered the nutritious pili nut during a kite surfing trip in the Philippines and brought it back to the U.S. with a dream. He started by sharing samples along the West Coast while traveling in his old pickup truck. From those humble beginnings, Pili Hunters has grown into a well-known brand within the Keto, Paleo, Vegan, and health-conscious communities, now based in Bend, Oregon and available online and in health food stores nationwide.</p>

            <button className='bg-orange-600 px-[1rem] py-[0.3rem] text-[1rem] font-[500] mt-[1rem] w-fit text-white secondary-font rounded-md'>Explore Our Flavours</button>
          </div>
        </div>
      </div>

      <div className='mt-[5rem]'>
        <Testimonial />
      </div>

      <div className='flex flex-col items-center mt-[5rem] py-[2rem] bg-[var(--primary-color)]'>
        <h3 className='primary-font text-[1.8rem] text-center leading-none text-white'>THE WORLD'S HEALTHIEST NUT</h3>
      </div>
    </div>
  )
}

export default OurStory
