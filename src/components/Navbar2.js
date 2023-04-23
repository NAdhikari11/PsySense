import React, {useState} from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/Logo.png'

const Navbard = () => {
    const navigate = useNavigate();
    const goToDashboard = () => {
      navigate('/dashboard')
    }

    const [isClicked, changeState] = useState(false);

    const toggleView = () => changeState(!isClicked);
    
    return (
      <div className='flex w-full h-14 justify-between font-quicksand text-sm font-semibold text-white' style={{ backgroundColor: 'rgba=(0, 0, 0, 0.3)'}}>
        <div className='flex ml-5 w-1/2'>
          <div className='flex w-20 items-center justify-center'>
            <a href='/'><img src = {Logo} alt = 'Logo' className="w-24 h-12"></img></a>
          </div> 
        </div>
        <div className='flex mr-5'>
          <div className={isClicked ? 'mt-14' : 'hidden'}>
                <div className='text-dirt drop-shadow-lg bg-eggshell pl-7 pr-10 w-64 h-80 rounded-md' >
                  <UserCircleIcon  className="h-18 w-18" aria-hidden="true" />
                  <h3>Name</h3>
                  <h3 className='mt-2'>Email</h3>
                  <h3 className='mt-2'>Address</h3>
                  <h3 className='mt-2'>Contact No.</h3>
                </div>
            </div>
            <div onClick={toggleView} className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-stone-700 font-semibold' >
              <UserCircleIcon  className="h-8 w-8 hover:text-stone-700" aria-hidden="true" />
            
            </div>
          </div>
    </div>
  )
}

export default Navbard
