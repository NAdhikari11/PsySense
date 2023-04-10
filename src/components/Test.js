import { Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import working from '../img/working.jpg'

const Test = () => {

  const navigate = useNavigate()
  const navigateToDass = () => {
    navigate('/dass')
  }

  const navigate1 = useNavigate()
  const navigateToResult = () => {
    navigate1('/results')
  }


  return (
    <div className='w-full h-auto bg-no-repeat bg-cover' style={{backgroundImage: `url(${working})`}}>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}} className='w-full h-96'>
        <div className='flex justify-around w-5/6 h-4/5 rounded-lg bg-slate-700 mx-auto items-center font-quicksand translate-y-9'>
                <div className='h-48 w-80 bg-no-repeat bg-cover font-quicksand rounded-lg' style={{ backgroundImage: `url(${working})` }}>
                    
                </div>
                <div className='font-2xl font-semibold text-white'>
                    <h2 className='pb-2'>See previous test results</h2>
                    <button className='bg-moss text-white rounded-full w-28 h-8 mx-auto' onClick={navigateToResult}>See Result</button>
                    <h2 className='pb-2 pt-4'>Retake DASS-21 test</h2>
                    <button className='bg-moss text-white rounded-full w-24 h-8 mx-auto' onClick={navigateToDass}>Take Test</button>
                </div>
            </div>
        </div>
            
        </div>
  )
}

export default Test