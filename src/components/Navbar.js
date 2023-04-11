import { useNavigate } from "react-router-dom";
import React from 'react';
import Logo from '../img/Logo.png'

const Navbar = () => {

  const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }

  return (
    <div className='flex w-full h-14 justify-between font-quicksand text-sm font-semibold' style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
      <div className='flex ml-5 w-1/2'>
        <div className='flex w-20 items-center justify-center text-gray-300'>
          <a href='/'><img src = {Logo} alt = 'Logo' className="w-24 h-12"></img></a>
        </div> 
       </div>
       <div className='flex mr-5'>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-stone-700 text-white font-semibold' onClick={navigateToLogin}>
          <a href='#'>Schedule Appointment</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-stone-700 text-white font-semibold' onClick={navigateToLogin}>
          <a href='#'>Find a Therapist</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-stone-700 text-white font-semibold' onClick={navigateToLogin}>
          <a href='#'>Sync Data</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-stone-700 text-white font-semibold scroll-smooth'>
          <a href='#about'>About Us</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-stone-700 text-white font-semibold'>
          <a href='#know'>Know More</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;