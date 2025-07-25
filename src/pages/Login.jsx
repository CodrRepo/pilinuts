import React, { useContext, useEffect } from 'react'
import featuresVideo from "../assets/videos/features.mp4"
import loginImg from "../assets/images/products/login.png"
import { Link } from 'react-router';
import { PHContext } from '../context/PHContextProviders';

const Login = () => {
    const {showFooter, setShowFooter} = useContext(PHContext);

    useEffect(() => {
        setShowFooter(false);
    }, [showFooter]);
  return (
    <div className='min-h-screen'>
        <div className='flex flex-col md:flex-row justify-center items-center pt-[14rem] md:pt-[9rem] xl:pt-[10rem] overflow-hidden px-[2rem]'>
            <div className='flex justify-center items-center w-full md:w-auto'>
                <img className='rounded-xl md:rounded-md w-full md:w-[50%] h-[20vh] md:h-auto aspect-[13/16] object-cover' src={loginImg} alt="" />
            </div>
            <div className='w-full md:w-[50%] mt-[3rem] md:mt-0'>
                <h3 className='secondary-font font-[600] text-[3rem] md:text-[2rem] leading-[2.3rem] text-center md:w-[50%]'>Login</h3>
                <form className='text-[1.5rem] md:text-[0.9rem] flex flex-col gap-[1rem] md:gap-[0.4rem] md:w-[50%] mt-[2rem] md:mt-[1rem]'>
                    <input className='p-[0.5rem] border-[1px] border-zinc-400 rounded-md' type="email" placeholder='Email address' />
                    <input className='p-[0.5rem] border-[1px] border-zinc-400 rounded-md' type="password" placeholder='Password' />
                    <button className='p-[0.7rem] md:p-[0.5rem] bg-[var(--primary-color)] text-black/70 font-[600] rounded-md'>Login</button>
                </form>


                <div className='mt-[1.5rem] md:mt-[1rem] w-full md:w-[50%]'>
                    <p className='secondary-font text-[1.8rem] md:text-[1rem] text-center'>or login with</p>
                    <div className='text-[2.5rem] md:text-[1.3rem] flex justify-center gap-[1rem] mt-[1rem] md:mt-[0.5rem]'>
                        <i className="ri-google-fill bg-[var(--primary-color)]/20 border-[var(--primary-color)] py-[0.1rem] px-[0.5rem] rounded-md"></i>
                        <i className="ri-facebook-fill bg-[var(--primary-color)]/20 border-[var(--primary-color)] py-[0.1rem] px-[0.5rem] rounded-md"></i>
                        <i className="ri-apple-fill bg-[var(--primary-color)]/20 border-[var(--primary-color)] py-[0.1rem] px-[0.5rem] rounded-md"></i>
                    </div>
                </div>

                <p className='text-[1.5rem] md:text-[1rem] text-center md:w-[50%] mt-[2rem] md:mt-[1rem]'>Don't have an account? <Link to="/register" className='text-[var(--primary-color)]'>Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login