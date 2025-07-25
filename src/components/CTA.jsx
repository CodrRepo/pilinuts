import React, { useEffect, useState } from 'react';
import CircularText from '../partials/CircularText';
import piliRawCocoaImg from "../assets/images/products/pili_raw_cacao.webp"
import piliRawChiliImg from "../assets/images/products/pili_spicy_chili.webp"
import useSlideUpAnimation from '../animations/useSlideUpAnimation';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all'

const CTA = () => {
  // const [ctaButton, setCtaButton] = useState([]);

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
    document.fonts.ready.then(() => {
      // const hoverButton1 = SplitText.create(".cta-btn-top", { type: "chars", wrapper: { className: "relative" } });
      // const hoverButton2 = SplitText.create(".cta-btn-bottom", { type: "chars", wrapper: { className: "relative" } });

      // setCtaButton([hoverButton1, hoverButton2]);
    });

  }, [])

  return (
    <div className='relative h-[100vh] w-full bg-[var(--secondary-color)]'>
      <div className='absolute top-[45%] left-[78%] -translate-x-1/2 -translate-y-1/2 primary-font w-[30%]'>
        <h2 className=' text-[var(--primary-color)] text-[2rem] leading-none'>The Original & Highest Quality Pili Nuts Since 2014</h2>
        <h3 className='mt-[1rem]'>NO SEED OILS</h3>

        <p className='secondary-font'>Keto, Paleo & Vegan — Naturally. No bee's Harmed</p>

        <button
          onMouseEnter={(e) => hoverSlideUpAnimation()}
          onMouseLeave={(e) => leaveSlideUpAnimation()}
          className='relative cursor-pointer leading-[2.5rem] bg-orange-600 text-[1rem] font-[500] mt-[1rem] text-white secondary-font rounded-md'>
          <span className='cta-btn-top [clip-path:inset(0_0_0%_0)] pointer-event-none px-[1rem] block relative z-[10]'>Shop Now</span>
          <span className='cta-btn-bottom [clip-path:inset(0_0_100%_0)] pointer-event-none px-[1rem] h-fit block z-[20] absolute top-[80%] -translate-y-1/2 left-0'>Shop Now</span>
        </button>
      </div>

      <div>
        <img className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] absolute bottom-[20%] left-[43%] -translate-x-1/2 w-[22%] object-cover rotate-[25deg] z-[20]' src={piliRawCocoaImg} alt="pili raw cocoa" />
        <img className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] absolute bottom-[20%] left-[33%] -translate-x-1/2 w-[22%] object-cover z-[30]' src={piliRawChiliImg} alt="pili raw chili" />
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

      <div className='absolute bottom-[0%] right-[20%] z-[10]'>
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