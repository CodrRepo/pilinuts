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
        <div className='flex justify-center items-center mt-[10rem] overflow-hidden'>
            <div className='flex justify-center items-center'>
                <img className='rounded-md w-[50%] aspect-[13/16] object-cover' src={loginImg} alt="" />
            </div>
            <div className='w-[50%]'>
                <h3 className='secondary-font font-[600] text-[2rem] leading-[2.3rem] text-center w-[50%]'>Login</h3>
                <form className='text-[0.9rem] flex flex-col gap-[0.4rem] w-[50%] mt-[1rem]'>
                    <input className='p-[0.5rem] border-[1px] border-zinc-400 rounded-md' type="email" placeholder='Email address' />
                    <input className='p-[0.5rem] border-[1px] border-zinc-400 rounded-md' type="password" placeholder='Password' />
                    <button className='p-[0.5rem] bg-[var(--primary-color)] text-black/70 font-[600] rounded-md'>Login</button>
                </form>

                {/* <p className='secondary-font text-[0.9rem] mt-[0.5rem] text-center w-[50%]'>Forgot Password?</p> */}


                <div className=' mt-[1rem] w-[50%]'>
                    <p className='secondary-font text-[1rem] text-center'>or login with</p>
                    <div className='flex justify-center gap-[1rem] mt-[0.5rem]'>
                        <i className="ri-google-fill bg-[var(--primary-color)]/20 border-[var(--primary-color)] text-[1.3rem] py-[0.1rem] px-[0.5rem] rounded-md"></i>
                        <i className="ri-facebook-fill bg-[var(--primary-color)]/20 border-[var(--primary-color)] text-[1.3rem] py-[0.1rem] px-[0.5rem] rounded-md"></i>
                        <i className="ri-apple-fill bg-[var(--primary-color)]/20 border-[var(--primary-color)] text-[1.3rem] py-[0.1rem] px-[0.5rem] rounded-md"></i>
                    </div>
                </div>

                <p className='text-center w-[50%] mt-[1rem]'>Don't have an account? <Link to="/register" className='text-[var(--primary-color)]'>Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login