import React from 'react'
import piliCoconutImg from "../assets/images/products/pili_coconut.webp"
import "../index.css"

const Details = () => {
  React.useEffect(() => {
    const font = new FontFace('primary-font', 'url(/fonts/primary_font.woff2)');
    document.fonts.add(font);
  }, [])

  return (
    <div className='min-h-screen py-[8rem] px-[2rem] flex gap-[5rem] justify-center'>
      <div className='relative flex gap-[2rem]'>
        <div className='w-[4rem] flex gap-[2rem] pt-[1rem] flex-col justify-start h-fit'>
          <img src={piliCoconutImg} alt="" className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] w-full h-full object-contain' />
          <img src={piliCoconutImg} alt="" className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] w-full h-full object-contain' />
        </div>
        <div className='w-full h-[70vh] border-[1px] border-[var(--primary-color)] p-[2rem] rounded-md'>
          <img src={piliCoconutImg} alt="" className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] w-full h-full object-contain' />
        </div>
      </div>

      <div className='w-[35%] relative flex justify-center gap-[5rem]'>
        <div>
          <h2 className='primary-font text-[2rem] leading-[2.3rem]'>Organic Coconut Oil & Himalayan Salt</h2>
          <p className='secondary-font text-[1.5rem] mt-[0.2rem]'>&#8377;3,300.00</p>

          <div className='flex gap-[0.5rem] items-center mt-[1rem]'>
            <div className='flex gap-[0.1rem] text-yellow-300'>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <span className='text-[1.1rem]'>reviews</span>
          </div>

          <p className='mt-[1rem]'>The Original savory flavor that started the pili nut craze in the keto community.</p>

          <div className='mt-[1rem]'>
            <p className='secondary-font text-[1.1rem]'><span className='font-bold'>Size:</span> 1lb($2.24/oz)</p>
            <div className='flex gap-[1rem] mt-[0.5rem]'>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-md bg-[var(--primary-color)] text-white'>1 lb($2.24/oz)</button>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-md'>5 oz($3.00/oz)</button>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-md'>1.85 oz($3.24/oz)</button>
            </div>
          </div>

          <div className='mt-[1rem]'>
            <p>Quantity:</p>
            <div className='flex gap-[1rem] mt-[0.5rem]'>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] rounded-md'>-</button>
              <span>1</span>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] rounded-md'>+</button>
            </div>
          </div>

          <button className='bg-orange-500 text-white px-[1rem] py-[0.5rem] rounded-md mt-[2rem]'>Add to Cart</button>

          <div className='z-[150] flex fixed bottom-0 left-0 w-full bg-[var(--primary-color)] text-white p-[0.5rem] mt-[2rem]'>
            <div className='marquee shrink-0 flex items-center pr-[1rem]'>
              <h4>Buy More & Save! Mix & Match 1lb bags</h4>
              <span className='ml-[1rem]'>-</span>

              <ul className='flex gap-[1rem] ml-[1rem]'>
                <li>Buy 2 Save 5%</li>
                <span className='ml-[1rem]'>-</span>
                <li>Buy 3 Save 10%</li>
                <span className='ml-[1rem]'>-</span>
                <li>Buy 4+ Save 15%</li>
                <span className='ml-[1rem]'>-</span>
                <li>And Free Shipping On Order &#8377; 5000+</li>
                <span className=''>-</span>
              </ul>
            </div>

            <div className='marquee shrink-0 flex items-center pr-[1rem]'>
              <h4>Buy More & Save! Mix & Match 1lb bags</h4>
              <span className='ml-[1rem]'>-</span>

              <ul className='flex gap-[1rem] ml-[1rem]'>
                <li>Buy 2 Save 5%</li>
                <span className='ml-[1rem]'>-</span>
                <li>Buy 3 Save 10%</li>
                <span className='ml-[1rem]'>-</span>
                <li>Buy 4+ Save 15%</li>
                <span className='ml-[1rem]'>-</span>
                <li>And Free Shipping On Order &#8377; 5000+</li>
                <span className=''>-</span>
              </ul>
            </div>

            <div className='marquee shrink-0 flex items-center pr-[1rem]'>
              <h4>Buy More & Save! Mix & Match 1lb bags</h4>
              <span className='ml-[1rem]'>-</span>

              <ul className='flex gap-[1rem] ml-[1rem]'>
                <li>Buy 2 Save 5%</li>
                <span className='ml-[1rem]'>-</span>
                <li>Buy 3 Save 10%</li>
                <span className='ml-[1rem]'>-</span>
                <li>Buy 4+ Save 15%</li>
                <span className='ml-[1rem]'>-</span>
                <li>And Free Shipping On Order &#8377; 5000+</li>
                <span className=''>-</span>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details