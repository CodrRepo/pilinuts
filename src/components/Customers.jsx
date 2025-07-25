import React from 'react'
import useSlideUpAnimation from '../animations/useSlideUpAnimation'

const Clients = () => {
  const customers = [
    "https://eatpilinuts.com/cdn/shop/files/abc_426x.png?v=1664226252",
    "https://eatpilinuts.com/cdn/shop/files/shark85_426x.png?v=1664226424",
    "https://eatpilinuts.com/cdn/shop/files/gma2_426x.png?v=1664226713",
    "https://eatpilinuts.com/cdn/shop/files/pili_0006_Layer-2_426x.png?v=1664226055",
    "https://eatpilinuts.com/cdn/shop/files/pili_0005_Layer-3_426x.png?v=1664226064",
    "https://eatpilinuts.com/cdn/shop/files/pili_0004_Layer-4_426x.png?v=1664226070",
    "https://eatpilinuts.com/cdn/shop/files/pili_0003_Layer-5_426x.png?v=1664226077",
    "https://eatpilinuts.com/cdn/shop/files/pili_0002_Layer-6_426x.png?v=1664226083",
    "https://eatpilinuts.com/cdn/shop/files/pili_0001_Layer-7_426x.png?v=1664226098",
    "https://eatpilinuts.com/cdn/shop/files/pili_0000_Layer-8_426x.png?v=1664226106",
    "https://eatpilinuts.com/cdn/shop/files/pili_0007_Layer-1_426x.png?v=1664226047",

  ]

  useSlideUpAnimation(".customer-heading", ".customer-heading", "65%");

  return (
    <div id='customers' className='bg-white pt-[5rem] relative z-[60]'>

      <div className='pt-[3rem] bg-[var(--primary-color)]'>
      <h2 className='customer-heading primary-font text-[3rem] text-white leading-none text-center px-[2rem]'>
        As <span className='text-[var(--dark-primary-color)]'>Seen</span> On
      </h2>
      <p className='secondary-font mt-[1rem] text-[1.3rem] leading-[1.7rem] text-white/70 text-center w-[70%] mx-auto px-[2rem]'>Pili Hunters was featured on Shark Tank and top media outlets, gaining praise for its sustainable, nutrient-rich pili nuts and inspiring adventure-filled brand story.</p>

      <div className='flex flex-col justify-center items-center mt-[2rem]'>
        <div className='flex gap-[0.1rem] text-[1.2rem] text-yellow-300'>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
        </div>
        <p className='secondary-font text-[1.2rem] text-white/70 text-right px-[2rem]'>Over <span className='font-bold text-[var(--dark-primary-color)]'>8,500</span> 5-Star Reviews</p>
      </div>

      <div className='flex overflow-hidden'>
        <div className='marquee shrink-0 flex justify-center gap-[1rem] pr-[1rem] overflow-hidden'>
          {
            customers.map((customer, index) => {
              return (
                <img key={index} className='shrink-0 w-[13rem] aspect-square object-contain' src={customer} alt="" />
              )
            })
          }
        </div>
        <div className='marquee shrink-0 flex justify-center gap-[1rem] pr-[1rem] overflow-hidden'>
          {
            customers.map((customer, index) => {
              return (
                <img key={index} className='shrink-0 w-[13rem] aspect-square object-contain' src={customer} alt="" />
              )
            })
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Clients