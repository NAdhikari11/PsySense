import { Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import Question from '../components/Questions'
import Navbar3 from '../components/Navbar3'

function Dass() {

    const navigate = useNavigate()
    const navigateToDash = () => {
        navigate('/dashboard')
    }
    return (
        <div className='bg-rouge'>
            <Navbar3 />
            <div className='flex flex-col py-20 px-8'>
            <div className='flex-justify-center h-4/5 w-3/4 bg-white mx-auto rounded-lg p-16'>
                <h1 className='font-quicksand text-2xl px-8 pt-8 font-bold border-b pb-4 mx-16 border-slate-200'>DASS-21 Test</h1>
                <Question />
                <div class="mt-6 flex items-center justify-end gap-x-6 border-y border-slate-200 py-4 px-8">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" class="rounded-md bg-moss px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={navigateToDash}>Save</button>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Dass