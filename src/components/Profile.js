import React from 'react'
import Navbard from './Navbard'

const Profile = () => {
  return (
    <div className='w-full h-96 bg-moon font-quicksand text-dirt'>
        <Navbard />
        <div className='flex justify-between px-16'>
        <div className='text-4xl pt-24'>
            <p>Hi</p>
            <p>Welcome To PsySense!</p>
        </div>
        <div className='text-lg w-1/2 p-8'>
            <ul>
                <li>Age: </li>
                <li>Email-ID: </li>
                <li>Phone Number: </li>
                <li>Emergency Contacts: </li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Profile