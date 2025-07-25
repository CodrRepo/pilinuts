import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { PHContext } from '../context/PHContextProviders';

const Testimonial = () => {

  const reviews = [
    {
      name: 'John Doe',
      review: 'Ive been looking for a natural alternative to my usual skincare products and Pili has been a game changer! My skin has never looked better.'
    },
    {
      name: 'Sarah Johnson',
      review: 'I was skeptical about trying a new skincare brand, but after using Pili for a week I was hooked! The products are so gentle and effective.'
    },
    {
      name: 'Emily Chen',
      review: 'Pili has genuinely improved the overall health and appearance of my skin. I cant recommend it enough!'
    },
    {
      name: 'Michael Davis',
      review: 'Ive tried a lot of skincare products and Pili is one of the best. The products are easy to use and the results are amazing.'
    },
    {
      name: 'Christina Lee',
      review: 'I have sensitive skin and Pili products have been a godsend. Theyre so gentle and nourishing.'
    },
    {
      name: 'David Kim',
      review: 'I was blown away by the quality of Pili products. Theyre so much better than the big brand names I was using before.'
    },
    {
      name: 'Hannah Brown',
      review: 'Ive been using Pili for a few months now and my skin has never looked better. The products are amazing!'
    },
    {
      name: 'Kevin White',
      review: 'I was skeptical about trying a new skincare brand, but Pili has genuinely improved my skin. I highly recommend it!'
    },
    {
      name: 'Lily Tran',
      review: 'Pili products are so gentle and nourishing. I love using them as part of my daily skincare routine.'
    },
    {
      name: 'Alexander Martin',
      review: 'Ive tried a lot of skincare products and Pili is one of the best. The products are easy to use and the results are amazing.'
    },
  ];

  const { isMobile } = useContext(PHContext);


  return (
    <div className='relative px-[2rem] z-[100]'>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        freeMode={isMobile?false:true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        {
          reviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-white p-[2rem] flex flex-col justify-center items-center border-[1px] border-[var(--primary-color)] rounded-xl md:rounded-md h-[40vh] md:h-[50vh] xl:h-[40vh]">

                  <p className='user-select-none primary-font text-[2.3rem] md:text-[1.4rem]'>{review.name}</p>
                  <div className='flex gap-[0.1rem] text-[1.7rem] md:text-[1rem] text-yellow-300'>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <p className='user-select-none secondary-font text-[1.8rem] md:text-[1rem] mt-[1.5rem] md:mt-[1rem] text-center'>{review.review}</p>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}

export default Testimonial