import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { div, img } from 'framer-motion/client';
import useSlideUpAnimation from '../animations/useSlideUpAnimation';
import useSplitText from '../Utility/useSplitText';
import { PHContext } from '../context/PHContextProviders';

const ProductShowcase = () => {

  const { isMobile } = useContext(PHContext);

  const showcaseProducts = [
    {
      name: 'Spicy Labuyo Chili',
      image: 'https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Cacao-front_500x.png?v=1666727134'
    },
    {
      name: 'Raw Cacao & Organic Coconut Sugar',
      image: 'https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Himalayan-front_1_500x.png?v=1603829437'
    },
    {
      name: 'Organic Coconut Oil & Himalayan Salt',
      image: !isMobile ? "#" : "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_CoconutHim-front_655x.png?v=1666728188"
    },
    {
      name: 'Just Pink Himalayan Salt 100% Keto, Paleo, Vegan',
      image: 'https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Spicy-front_500x.png?v=1666726991'
    },
    {
      name: 'Natural Unsalted Cooking Quality (Plain) BEST',
      image: 'https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Plain-front_500x.png?v=1650065938'
    },
  ];

  useSlideUpAnimation("#ps-main-heading", "#productShowcase", "65%");


  return (
    <div id='productShowcase' className='relative px-[2rem] bg-white pt-[2rem]'>
      <h2 id='ps-main-heading' className=' primary-font overflow-hidden text-[var(--dark-primary-color)] mb-[3rem] text-[3.5rem] md:text-[2rem] leading-[3.8rem] md:leading-none'>

        Pili Hunters Is The

        <br /> <span className='text-[var(--primary-color)]'>Healthiest Choice!</span>

      </h2>


      {!isMobile ? <div className='grid grid-cols-1 md:grid-cols-5 gap-[1rem] mt-[2rem]'>
        {
          showcaseProducts.map((item, index) => {
            return (
              <div key={index} className='relative overflow-hidden rounded-md'>
                <div className='bg-[var(--primary-color)]/10 p-[3rem] md:p-[1rem] flex items-center justify-center'>
                  <img style={{ opacity: item.image != "#" ? 1 : 0 }} className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-[80%] md:w-full aspect-square rounded-md object-contain' src={item.image} alt="" />
                </div>
                <div className='relative !z-[100]'>
                  <p className='secondary-font relative !z-[100] text-[2rem] md:text-[1rem] leading-[2.5rem] md:leading-[1.3rem] h-[9rem] md:h-[6rem] xl:h-[4.3rem]  text-white text-center bg-[var(--primary-color)] p-[1rem]'>{item.name}SD</p>
                </div>
              </div>
            )
          })
        }
      </div> : <Swiper
        slidesPerView={isMobile ? 1 : 5}
        spaceBetween={10}
        freeMode={isMobile ? false : true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper overflow-visible relative"
      >
        {
          showcaseProducts.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='relative overflow-hidden rounded-md'>
                  <div key={index} className='bg-[var(--primary-color)]/10 p-[3rem] md:p-[1rem] flex items-center justify-center'>
                    <img style={{ opacity: product.image != "#" ? 1 : 0 }} className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-[80%] md:w-full aspect-square rounded-md object-contain' src={product.image} alt="" />
                  </div>
                  <div className='relative z-[100]'>
                    <p className='secondary-font relative !z-[100] text-[2rem] md:text-[1rem] leading-[2.5rem] md:leading-[1.3rem] h-[9rem] md:h-[6rem] xl:h-[4.3rem]  text-white text-center bg-[var(--primary-color)] p-[1rem]'>{product.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      }
    </div >
  )
}

export default ProductShowcase