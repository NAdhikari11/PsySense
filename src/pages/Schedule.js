import React from 'react'
import therapist4 from '../img/therapist4.jpeg';
import Navbard from '../components/Navbard';
import Footer from '../components/Footer';

const Schedule = () => {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover font-quicksand' style={{ backgroundImage: `url(${therapist4})` }} >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className='w-full h-screen text-black'>
        <Navbard />
         <div className='w-full h-screen pt-20 pl-32'>
          <div className='h-2/3 w-1/2 px-12 py-8 bg-white rounded-lg' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="border-b border-gray-900/10 pb-4 w-4/5 pl-12 pt-4">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">Schedule Appointment</h2>
              </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Time
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className='mx-auto'>
                  <button className='bg-moss text-white rounded-full w-24 h-8 mx-auto hover:bg-red-950'>Schedule</button>
                </div>  
              </div>  
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default Schedule