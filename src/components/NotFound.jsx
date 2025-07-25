import React from 'react'
import { Link } from 'react-router'
const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h2 className='secondary-font text-[2.5rem] md:text-[2rem] text-red-600 font-[600]'>Eror 404</h2>
        <p className='secondary-font text-[2.5rem] md:text-[2rem] font-[600]'>Page Not Found</p>
        <Link to="/" className='mt-[1rem] text-[2.5rem] md:text-[1.2rem] font-[600] bg-[var(--primary-color)] text-white px-[1rem] py-[0.5rem] rounded-xl md:rounded-md'>Back to Home</Link>
    </div>
  )
}

export default NotFound