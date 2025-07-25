import React from 'react'
import { Link } from 'react-router';
const Header = () => {
  return (
    <div id='header' className='text-[var(--secondary-color)] absolute top-0 left-0 w-full z-50 flex justify-between items-start px-[1rem] py-[1rem]'>
        <img className='w-[9rem]' src="https://eatpilinuts.com/cdn/shop/files/dark-logo-grn_62b46d0f-4035-4176-b5a4-c92aeb29aa62_340x.png?v=1630576859" alt="logo" />

        <div className='secondary-font text-[var(--dark-primary-color)] font-[500]'>
            <ul>
                <li className='nav-link relative'><Link to="/">Home</Link></li>
                <li className='nav-link relative'><Link to="/shop">Shop</Link></li>
                <li className='nav-link relative'><Link to="/our-story">Our Story</Link></li>
            </ul>
        </div>

        <div className='flex gap-[0.7rem] bg-[var(--secondary-color)] text-[var(--primary-color)] px-[1rem] py-[0.5rem] rounded-full text-[1.1rem]'>
            <Link to="/login"><i className="ri-user-fill"></i></Link>
            <i className="ri-shopping-cart-fill"></i>
        </div>
    </div>
  )
}

export default Header