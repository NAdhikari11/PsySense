import React from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'

const Navbard = () => {
    return (
        <div className='flex w-full h-14 justify-between font-quicksand text-sm font-semibold text-white' style={{ backgroundColor: 'rgba=(0, 0, 0, 0.3)'}}>
      <div className='flex ml-5 w-1/2'>
        <div className='flex w-20 items-center justify-center'>
          <a href='/'>Logo</a>
        </div> 
       </div>
       <div className='flex mr-5'>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-stone-700 font-semibold'>
          <a href='#schedule'>Schedule Appointment</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-stone-700 font-semibold'>
          <a href='#find'>Find a Therapist</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-stone-700 font-semibold'>
          <a href='#sync'>Sync Data</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-stone-700 font-semibold'>
          <a href='#about'>About Us</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-stone-700 font-semibold'>
          <a href='#know'>Know More</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-stone-700 font-semibold'>
          <UserCircleIcon className="h-8 w-8 hover:text-stone-700" aria-hidden="true" />
        </div>
      </div>
    </div>
)
}

export default Navbard