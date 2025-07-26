import React, { useEffect, useRef } from 'react'
import featuresVideo from "../assets/videos/features.mp4"
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import { useContext } from 'react';
import { PHContext } from '../context/PHContextProviders';
import { Link } from 'react-router';

const NavMenu = () => {
    const { closeMenu, isMenuOpen, setIsMenuOpen } = useContext(PHContext);
    const navLinks = [
        { link: "Home", to: "/" }, 
        { link: "Shop", to: "/shop" }, 
        { link: "Our Story", to: "/our-story" }, 
        { link: "Login", to: "/login" }, 
        { link: "Carts", to: "/cart" }
    ];




    useEffect(() => {
        const t1 = gsap.timeline();
        const t2 = gsap.timeline();
        if (isMenuOpen) {
            t1.to("#navMenu", {
                x: "0%",
                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                duration: 0.6
            })
            t1.to("#nav-top", {
                x: "0%",
                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                duration: 0.7
            }, 'a-=0.6')
            t1.to("#nav-bottom", {
                x: "0%",
                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                duration: 0.7
            }, 'a-=0.6')
        } else {
            t2.to("#nav-top", {
                x: "100%",
                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                duration: 0.6
            }, 'a')
            t2.to("#nav-bottom", {
                x: "100%",
                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                duration: 0.6
            }, 'a')
            t2.to("#navMenu", {
                x: "100%",
                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                duration: 0.7
            }, "-=0.6")
        }

        

    }, [isMenuOpen]);

    return (
        <div id="navMenu" className='bg-white translate-x-[100%] flex flex-col justify-center fixed top-0 z-[100000] h-screen w-full px-[2rem] pt-[2rem] pb-[2rem]'>
            <i onClick={() => setIsMenuOpen(false)} className="ri-close-large-line absolute top-[1.5rem] right-[2rem] cursor-pointer text-[3.4rem] z-[200]"></i>

            <div id='nav-top' className='h-[25%]'>
                <video className='w-full h-full object-cover object-center rounded-xl overflow-hidden' src={featuresVideo} autoPlay loop muted></video>
            </div>
            <div id='nav-bottom' className='flex flex-col justify-center mt-[5rem]'>
                <ul className='primary-font uppercase text-[var(--primary-color)] flex flex-col'>
                    {
                        navLinks.map((link, index) => {
                            return (
                                <Link to={link.to} className={`nav-link text-[2.5rem] leading-[4.5rem] ${index === navLinks.length - 1 ? "border-y-[1px]" : "border-t-[1px]"} border-black`} key={index}>{link.link}</Link>
                            )
                        })
                    }
                </ul>

                <div className='flex flex-col mt-[3rem]'>
                    <h4 className='text-[1.5rem] font-bold uppercase'>Follow Us</h4>
                    <div className='flex gap-[1rem] mt-[1rem] md:mt-[0.5rem]'>
                        <i className="ri-facebook-fill text-[2.5rem] cursor-pointer border-[1px] border-[var(--primary-color)] rounded-md px-[0.4rem] py-[0.1rem]"></i>
                        <i className="ri-instagram-fill text-[2.5rem] cursor-pointer border-[1px] border-[var(--primary-color)] rounded-md px-[0.4rem] py-[0.1rem]"></i>
                        <i className="ri-youtube-fill text-[2.5rem] cursor-pointer border-[1px] border-[var(--primary-color)] rounded-md px-[0.4rem] py-[0.1rem]"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu