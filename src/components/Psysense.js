import React from 'react';
import Therapist from '../img/Therapist.jpeg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/Logo.png'

const Psysense = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }
    const navigateToSignup = () => {
        navigate('/signup')
    }

    return (
        <div>
            <div className='w-full h-screen bg-no-repeat bg-cover scroll-smooth' style={{ backgroundImage: `url(${Therapist})` }} >
                <Navbar />
                <div style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }} className='w-full h-full text-center text-black flex justify-center'>
                    <div className='w-4/5 h-3/4 mt-6 font-quicksand flex justify-around' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                        <div className='my-auto mx-auto'>
                            <img src = {Logo} alt = 'PsySense'></img>
                                <p>Where stress makes sense</p>
                        </div>
                        <div className='rounded-lg h-72 w-80 bg-white p-6 shadow-lg my-auto mx-auto'>
                            <div className='flex flex-col align center justify-center items-center pt-8'>
                                <p>Already a member?</p>
                                <button className='bg-moss transition duration-300 ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 hover:bg-moon hover:text-red-950 text-white w-24 h-8 rounded-full mt-4 mb-4' onClick={navigateToLogin}>Login</button>
                                <p>OR</p>
                                <button className='bg-moss transition duration-300 ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 hover:bg-moon hover:text-red-950 text-white w-24 h-8 rounded-full mt-4' onClick={navigateToSignup}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Psysense;
