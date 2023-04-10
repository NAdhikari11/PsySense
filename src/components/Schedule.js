import { useNavigate } from 'react-router-dom';
import React from 'react';
import appointment from '../img/appointment.jpeg';

const Schedule = () => {
    const navigate = useNavigate()
    const navigateToSchedule = () => {
        navigate('/schedule')   
    }
    return (
        <div className='w-full h-auto bg-no-repeat bg-cover' style={{backgroundImage: `url(${appointment})`}} id="schedule">
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}} className='w-full h-96'>
                <div className='flex justify-around w-5/6 h-4/5 rounded-lg bg-slate-700 mx-auto items-center font-quicksand translate-y-9'>
                    <div className='h-48 w-80 bg-no-repeat bg-cover font-quicksand rounded-lg' style={{ backgroundImage: `url(${appointment})` }}>
                        
                    </div>
                    <div className='font-2xl font-semibold text-white'>
                        <h2 className='pb-2'>Schedule Your Appointment Now</h2>
                        <div className='flex w-full'>
                            <button className='bg-moss text-white rounded-full w-24 h-8 mx-auto' onClick={navigateToSchedule}>Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;