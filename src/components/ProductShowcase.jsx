import React, { useRef, useState } from 'react';
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

const ProductShowcase = () => {

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
      image: '#'
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
      <h2 id='ps-main-heading' className=' primary-font overflow-hidden text-[var(--dark-primary-color)] mb-[3rem] text-[3rem] leading-none'>

        Pili Hunters Is The

        <br /> <span className='text-[var(--primary-color)]'>Healthiest Choice!</span>

      </h2>


      <div className='grid grid-cols-5 gap-[1rem]'>
        {
          showcaseProducts.map((product, index) => {
            return (
              <div key={index} className='rounded-md overflow-hidden'>
                <div key={index} className='bg-[var(--primary-color)]/10 p-[1rem] flex items-center justify-center'>
                  <img style={{ opacity: product.image != "#" ? 1 : 0 }} className='drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-full aspect-square rounded-md object-contain' src={product.image} alt="" />
                </div>
                <p className='secondary-font relative z-[50] text-[1rem] leading-[1.3rem] h-[4.3rem] text-white text-center bg-[var(--primary-color)] p-[1rem]'>{product.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductShowcase