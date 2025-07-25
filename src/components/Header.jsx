import React from 'react'
import { Link } from 'react-router';
import { useContext } from 'react';
import { PHContext } from '../context/PHContextProviders';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
const Header = () => {
  const {setIsMenuOpen, isMenuOpen} = useContext(PHContext);
  const t1 = gsap.timeline();
  
  return (
    <div id='header' className='text-[var(--secondary-color)] absolute top-0 left-0 w-full z-50 flex justify-between items-center md:items-start px-[2rem] py-[1rem]'>
        <img className='w-[13rem] md:w-[9rem]' src="https://eatpilinuts.com/cdn/shop/files/dark-logo-grn_62b46d0f-4035-4176-b5a4-c92aeb29aa62_340x.png?v=1630576859" alt="logo" />

        <div className='hidden md:block secondary-font text-[var(--dark-primary-color)] font-[500]'>
            <ul>
                <li className='nav-link relative'><Link to="/">Home</Link></li>
                <li className='nav-link relative'><Link to="/shop">Shop</Link></li>
                <li className='nav-link relative'><Link to="/our-story">Our Story</Link></li>
            </ul>
        </div>

        <div className='hidden md:flex gap-[0.7rem] bg-[var(--secondary-color)] text-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-full text-[1.1rem]'>
            <Link to="/login"><i className="ri-user-fill"></i></Link>
            <Link to="/cart"><i className="ri-shopping-cart-fill"></i></Link>
        </div>

        <i onClick={()=>setIsMenuOpen(true)} className="ri-menu-line cursor-pointer md:hidden text-[3.5rem] relative text-black"></i>
    </div>
  )
}

export default Header