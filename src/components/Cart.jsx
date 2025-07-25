import React, { useContext } from 'react'
import { PHContext } from '../context/PHContextProviders';
import { Link } from 'react-router';
import { div } from 'framer-motion/client';
const Cart = () => {
    const {productsData, cartData, setSelectedProduct, setProductsData} = useContext(PHContext);
    const filteredProducts = productsData.filter(product => product.isAddedToCart);
    const removeFromCart = (item) => {
        setProductsData(prevState => 
            prevState.map(product => 
                product.name === item.name ? {...product, isAddedToCart: false} : product
            )
        );
    }
    console.log(filteredProducts);
  return (
    <div className='min-h-screen pt-[10rem] pb-[5rem] px-[2rem] rounded-xl md:rounded-md overflow-hidden'>
        {filteredProducts.length > 0 ? <h2 className='primary-font text-[2.7rem] leading-[3rem] md:text-[2.3rem] md:leading-[2.6rem] text-center text-[var(--primary-color)] overflow-hidden'>Your Cart Items</h2> : null}
        {filteredProducts.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-5 gap-[1rem] bg-[var(--light-primary-color)] p-[2rem] mt-[2rem]'>
            {
                filteredProducts.map((item, index) => {
                    return (
                        <div key={index} className=' relative rounded-md border-[1px] border-[var(--primary-color)] overflow-hidden'>
                                <i onClick={() => removeFromCart(item)} className="ri-delete-bin-line text-[2.5rem] md:text-[1.3rem] aspect-square cursor-pointer absolute top-[0.5rem] right-[85%] md:right-[0.5rem] z-[100] bg-[var(--light-primary-color)] rounded-full py-[0.3rem] px-[0.5rem] text-red-400 "></i>
                            <Link onClick={() => setSelectedProduct(item)} to={`/details/${index}`} className='flex md:flex-col justify-end items-center h-full'>
                                <div className='relative w-[45%] md:w-full p-[1rem]'>
                                    <img className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] mx-auto w-[8rem] h-[12rem] object-contain relative z-[40]' src={item.image} alt="" />
                                </div>

                                <div className='w-[55%] md:w-full h-full md:h-auto py-[0.5rem] px-[1rem] flex flex-col justify-center items-center bg-[var(--primary-color)] text-white'>
                                    <div className="text-[2.2rem] md:text-[1.2rem] z-[50]  text-white leading-none flex items-center font-[500] gap-[0.1rem]">
                                        <span className=''>&#8377;</span>
                                        <span>{item.price}</span>
                                    </div>
                                    <h3 className='text-[1.6rem] leading-[1.8rem] secondary-font md:text-[1rem] md:leading-[1.2rem] text-center mt-[0.5rem]'>{item.name}</h3>
                                </div>
                            </Link>
                            </div>
                    )
                })
            }
        </div> : <div className='flex flex-col justify-center items-center bg-[var(--light-primary-color)] h-[30vh] rounded-xl md:rounded-md'>
            <p className='primary-font text-[2rem] leading-[2.8rem] md:text-[2rem] md:leading-[2.3rem] text-center text-[var(--primary-color)] overflow-hidden'>Your Cart is Empty</p>
            <Link to="/shop">
                    <button
                      className='flex relative cursor-pointer leading-[4rem] md:leading-[2.5rem] bg-orange-600 text-[2rem] md:text-[1rem] font-[500] mt-[2rem] md:mt-[1rem] ml-[50%] md:ml-0 -translate-x-1/2 md:-translate-x-0 text-white secondary-font rounded-xl md:rounded-md'>
                      <span className='cta-btn-top [clip-path:inset(0_0_0%_0)] pointer-event-none px-[1.5rem] md:px-[1rem] block relative z-[10] whitespace-nowrap'>Shop Now</span>
                    </button>
                    </Link>
            </div>}
    </div>
  )
}

export default Cart