import React, { useContext, useEffect, useState } from 'react'
import piliCoconutImg from "../assets/images/products/pili_coconut.webp"
import "../index.css"
import { PHContext } from '../context/PHContextProviders';
import { useNavigate, useParams } from 'react-router';


const Details = () => {
  const navigate = useNavigate();
  const {productsData,setProductsData} = useContext(PHContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const {id} = useParams();


  const addToCart = () => {
    setProductsData(prevState => 
      prevState.map(product => 
        product.name === productsData[id].name ? {...product, isAddedToCart: true} : product
      )
    );
    
    setAddedToCart(true);
  }

  useEffect(() => {
    const font = new FontFace('primary-font', 'url(/fonts/primary_font.woff2)');
    document.fonts.add(font);
  }, [])

  return (
    <div className='min-h-screen pt-[15rem] md:pt-[12rem] pb-[5rem] px-[2rem] flex flex-col md:flex-row gap-[3rem] md:gap-[5rem] justify-center overflow-x-hidden'>
      <div className='relative flex gap-[2rem]'>
        <div className='hidden md:flex w-[4rem] gap-[2rem] pt-[1rem] flex-col justify-start h-fit'>
          <img src={productsData[id].image} alt="" className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] w-full h-full object-contain' />
          <img src={productsData[id].image} alt="" className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] w-full h-full object-contain' />
        </div>
        <div className='relative w-full'>
        <i className="ri-arrow-left-line text-[4rem] md:text-[2rem] text-[var(--primary-color)] absolute top-[-25%] md:top-[-10%] left-[0%] cursor-pointer" onClick={() => navigate(-1)}></i>
        <div className='w-full h-[30vh] md:h-[70vh] border-[1px] border-[var(--primary-color)] p-[2rem] rounded-md'>
          <img src={productsData[id].image} alt="" className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] w-full h-full object-contain' />
        </div>
        </div>
      </div>

      <div className='w-full md:w-[35%] relative flex justify-center gap-[5rem]'>
        <div>
          <h2 className='primary-font text-[2.3rem] leading-[2.8rem] md:text-[2rem] md:leading-[2.3rem]'>{productsData[id].name}</h2>
          <p className='secondary-font text-[2.6rem] md:text-[1.5rem] mt-[1rem] md:mt-[0.2rem]'>&#8377;{productsData[id].price}</p>

          <div className='flex gap-[0.7rem] md:gap-[0.5rem] items-center mt-[1rem]'>
            <div className='flex gap-[0.1rem] text-[1.8rem] md:text-[1.2rem] text-yellow-300'>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <span className='text-[1.8rem] md:text-[1.1rem]'>{productsData[id].reviews} reviews</span>
          </div>

          <p className='text-[1.8rem] md:text-[1rem] mt-[1.5rem] md:mt-[1rem]'>{productsData[id].description? productsData[id].description : ""}</p>

          <div className='mt-[1.5rem] md:mt-[1rem]'>
            <p className='secondary-font text-[1.9rem] md:text-[1.1rem]'><span className='font-bold'>Size:</span> 1lb($2.24/oz)</p>
            <div className='flex flex-wrap md:flex-nowrap gap-[1rem] mt-[0.5rem] text-[1.8rem] md:text-[1rem] overflow-scroll hide-scrollbar'>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-md bg-[var(--primary-color)] text-white'>1 lb($2.24/oz)</button>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-md'>5 oz($3.00/oz)</button>
              <button className='border-[1px] border-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-md'>1.85 oz($3.24/oz)</button>
            </div>
          </div>

          <div className='mt-[1.5rem] md:mt-[1rem]'>
            <p className='text-[1.8rem] md:text-[1rem]'>Quantity:</p>
            <div className='flex gap-[1.5rem] md:gap-[1rem] mt-[1rem] md:mt-[0.5rem] text-[1.8rem] md:text-[1rem]'>
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)} className='border-[1px] border-[var(--primary-color)] px-[1rem] rounded-md'>-</button>
              <span className=''>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className='border-[1px] border-[var(--primary-color)] px-[1rem] rounded-md'>+</button>
            </div>
          </div>

          <button onClick={addToCart} className='text-[1.8rem] md:text-[1rem] bg-orange-500 text-white px-[1.5rem] md:px-[1rem] py-[0.7rem] md:py-[0.5rem] rounded-xl md:rounded-md mt-[2rem]'>{ addedToCart || productsData[id].isAddedToCart ? "Added to Cart" : "Add to Cart"}</button>

          <div className='z-[150] flex fixed bottom-0 left-0 w-full bg-[var(--primary-color)] text-white p-[0.5rem] mt-[2rem]'>
            {
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className='marquee shrink-0 flex items-center pr-[1rem] text-[1.8rem] md:text-[1rem]'>
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
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details