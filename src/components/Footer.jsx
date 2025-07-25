import { div } from 'framer-motion/client';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router';
import { PHContext } from '../context/PHContextProviders';

const Footer = () => {
    const exploreLinks = ["Shop", "Our Story"];
    const supportLinks = ["Privacy Policy", "Terms of Service", "Shipping", "Returns & Refunds", "Milirary & Healthcare Discount", "Contact Us"];

    const {showFooter} = useContext(PHContext);
    useEffect(() => {
        console.log(showFooter);
    }, []);
    
    return (
        showFooter && <div className='border-t-[1px] border-[#bce59f] relative z-[60] bg-white py-[2rem] px-[2rem]'>
            <div className=' flex gap-[4rem] md:gap-[2rem] flex-wrap md:flex-nowrap'>
                <div className='w-[40%] md:w-[10%] flex flex-col'>
                    <h4 className='text-[1.5rem] md:text-[0.9rem] font-bold uppercase'>Explore</h4>

                    <div className='flex flex-col gap-[0rem] md:gap-[0.3rem] mt-[0.5rem]'>
                        {
                            exploreLinks.map((link, index) => {
                                return (
                                    <Link className='text-[1.5rem] md:text-[0.9rem]' key={index} to={"#"}>{link}</Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='flex flex-col w-[40%] md:w-[20%]'>
                    <h4 className='text-[1.5rem] md:text-[0.9rem] font-bold uppercase'>Support</h4>
                    <div className='flex flex-col gap-[0rem] md:gap-[0.3rem] mt-[0.5rem]'>
                        {
                            supportLinks.map((link, index) => {
                                return (
                                    <Link className='text-[1.5rem] md:text-[0.9rem]' key={index} to={"#"}>{link}</Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-[30%]'>
                    <h4 className='text-[1.5rem] md:text-[0.9rem] font-bold uppercase'>Newsletter</h4>
                    <p className='secondary-font text-[1.5rem] md:text-[0.9rem] mt-[0.5rem]'>Join our newsletter for news, promotions and new products directly to your inbox.</p>
                    <form className='flex flex-col items-start mt-[1rem] md:mt-[0.5rem] gap-[1rem] md:gap-[0.5rem]'>
                        <input className='p-[0.8rem] md:p-[0.3rem] text-[1.5rem] md:text-[0.9rem] border-[1px] border-zinc-400 rounded-xl md:rounded-md' type="email" placeholder='Enter your email' />
                        <button className='p-[0.8rem] md:p-[0.3rem] text-[1.5rem] md:text-[0.9rem] bg-[var(--primary-color)] text-white rounded-xl md:rounded-md' type="submit">Subscribe</button>
                    </form>
                </div>

                <div className='flex flex-col w-[50%] md:w-[15%]'>
                    <h4 className='text-[1.5rem] md:text-[0.9rem] font-bold uppercase'>Follow Us</h4>
                    <p className='secondary-font text-[1.5rem] leading-[1.6rem] md:text-[0.9rem] mt-[0.5rem]'>Stay social and follow us!</p>
                    <div className='flex gap-[1rem] mt-[1rem] md:mt-[0.5rem]'>
                        <i className="ri-facebook-fill text-[2rem] md:text-[1.2rem] cursor-pointer border-[1px] border-[var(--primary-color)] rounded-md px-[0.4rem] py-[0.1rem]"></i>
                        <i className="ri-instagram-fill text-[2rem] md:text-[1.2rem] cursor-pointer border-[1px] border-[var(--primary-color)] rounded-md px-[0.4rem] py-[0.1rem]"></i>
                        <i className="ri-youtube-fill text-[2rem] md:text-[1.2rem] cursor-pointer border-[1px] border-[var(--primary-color)] rounded-md px-[0.4rem] py-[0.1rem]"></i>
                    </div>
                </div>

                <div className='w-[30%] md:w-[15%]'>
                    <img className='w-full' src="https://eatpilinuts.com/cdn/shop/files/pili-hunters_badge-b_300x.png?v=1664470666" alt="pili hunters authenticity certificate" />
                </div>
            </div>
            <p className='secondary-font text-[1.4rem] md:text-[1rem] mt-[4rem] md:mt-[2rem] text-center'>© 2025 Pili Hunters. All rights reserved.</p>
        </div>
    )
}

export default Footer