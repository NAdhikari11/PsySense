import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import shrink from '../img/shrink.jpeg'

const Find = () => {

  const navigate = useNavigate()
  const navigateToFind = () => {
    navigate('/find')
  }

  return (
    <div className='w-full h-96 bg-rouge font-quicksand font-semibold' id = "find">
            <div className='flex justify-around w-5/6 h-4/5 rounded-lg bg-white mx-auto items-center translate-y-9'>
                <div className=''>
                    <h2>Find A Therapist Close To You</h2>
                    <button className='bg-moss text-white rounded-full w-24 h-8 mx-auto' onClick={navigateToFind}>Find</button>
                </div>
                <div className='h-48 w-80 bg-no-repeat bg-cover font-quicksand rounded-lg' style={{ backgroundImage: `url(${shrink})` }}>
                    
                </div>
            </div>
        </div>
  )
}

export default Find