import React, { useEffect, useState } from 'react';
import CircularText from '../partials/CircularText';
import piliRawCocoaImg from "../assets/images/products/pili_raw_cacao.webp"
import piliRawChiliImg from "../assets/images/products/pili_spicy_chili.webp"
import useSlideUpAnimation from '../animations/useSlideUpAnimation';
import { gsap } from 'gsap';
import { Link } from 'react-router';

const CTA = () => {

  const animateChars = (element, clipValue, yValue) => {
    gsap.to(element, {
      y: yValue,
      clipPath: clipValue,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
    });
  };

  const hoverSlideUpAnimation = () => {
    animateChars(".cta-btn-top", "inset(0 0 100% 0)", "-20%");
    animateChars(".cta-btn-bottom", "inset(0 0 0% 0)", "-30%");
  };

  const leaveSlideUpAnimation = () => {
    animateChars(".cta-btn-top", "inset(0 0 0% 0)", "0%");
    animateChars(".cta-btn-bottom", "inset(0 0 100% 0)", "0%");
  };
  useEffect(() => {

  }, [])

  return (
    <div className='flex flex-col md:flex-row-reverse justify-center items-start md:items-center py-[5rem] relative h-fit md:h-[100vh] w-full bg-[var(--secondary-color)]'>
      <div className='primary-font w-[100%] md:w-[35%] px-[2rem]'>
        <h2 className='text-[var(--primary-color)] text-center md:text-left text-[3.3rem] md:text-[2rem] leading-[3.8rem] md:leading-none'>The Original & Highest Quality Pili Nuts Since 2014</h2>
        <h3 className='mt-[1.5rem] md:mt-[1rem] text-[2.2rem] md:text-[1rem] text-center md:text-left'>NO SEED OILS</h3>

        <p className='mt-[1rem] md:mt-0 secondary-font text-[2rem] md:text-[1rem] leading-[2.2rem] md:leading-[1.5rem] text-center md:text-left'>Keto, Paleo & Vegan — Naturally. No bee's Harmed</p>

        <Link to="/shop">
        <button
          onMouseEnter={(e) => hoverSlideUpAnimation()}
          onMouseLeave={(e) => leaveSlideUpAnimation()}
          className='relative cursor-pointer leading-[4rem] md:leading-[2.5rem] bg-orange-600 text-[2rem] md:text-[1rem] font-[500] mt-[2rem] md:mt-[1rem] ml-[50%] md:ml-0 -translate-x-1/2 md:-translate-x-0 text-white secondary-font rounded-xl md:rounded-md'>
          <span className='cta-btn-top [clip-path:inset(0_0_0%_0)] pointer-event-none px-[1.5rem] md:px-[1rem] block relative z-[10]'>Shop Now</span>
          <span className='cta-btn-bottom [clip-path:inset(0_0_100%_0)] pointer-event-none px-[1.5rem] md:px-[1rem] h-fit block z-[20] absolute top-[80%] -translate-y-1/2 left-0'>Shop Now</span>
        </button>
        </Link>
      </div>

      <div className='relative h-[80vh] hidden md:block md:w-[55%]'>
        <img className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] absolute bottom-[10%] left-[52%] -translate-x-1/8 w-[40%] object-cover rotate-[25deg] z-[20]' src={piliRawCocoaImg} alt="pili raw cocoa" />
        <img className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] absolute bottom-[10%] left-[47%] -translate-x-1/2 w-[40%] object-cover z-[30]' src={piliRawChiliImg} alt="pili raw chili" />
      </div>

      {/* <div className='absolute uppercase bottom-0 flex w-full overflow-x-hidden'>
        <div className='marquee flex items-center gap-[1rem] pr-[1rem] text-[4rem] font-[700] text-[var(--primary-color)]'>
          <h3 className='shrink-0 whitespace-nowrap'>100% Natural</h3>
          <div className='h-[2rem] shrink-0 aspect-square bg-black rounded-full'></div>
          <h3 className='shrink-0 whitespace-nowrap text-black'>100% Sustainable</h3>
          <div className='h-[2rem] shrink-0 aspect-square bg-black rounded-full'></div>
          <h3 className='shrink-0 whitespace-nowrap'>Sprouted Since 2014</h3>
          <div className='h-[2rem] shrink-0 aspect-square bg-black rounded-full'></div>
        </div>
        <div className='marquee flex items-center gap-[1rem] pr-[1rem] text-[4rem] font-[700] text-[var(--primary-color)]'>
          <h3 className='shrink-0 whitespace-nowrap'>100% Natural</h3>
          <div className='h-[2rem] shrink-0 aspect-square bg-black rounded-full'></div>
          <h3 className='shrink-0 whitespace-nowrap text-black'>100% Sustainable</h3>
          <div className='h-[2rem] shrink-0 aspect-square bg-black rounded-full'></div>
          <h3 className='shrink-0 whitespace-nowrap'>Sprouted Since 2014</h3>
          <div className='h-[2rem] shrink-0 aspect-square bg-black rounded-full'></div>
        </div>
      </div> */}

      <div className='mx-auto mt-[5rem] md:absolute bottom-[0%] right-[5%] z-[10] overflow-hidden'>
        <CircularText
          text="100% Natural*100% Sustainable*Sprouted Since 2014*"
          onHover="speedUp"
          spinDuration={20}
          className=""
        />
      </div>

    </div>
  )
}

export default CTA