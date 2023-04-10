import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'

const Login = () => {

  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/#')
  }

  const navigate1 = useNavigate()
  const navigateToDash = () => {
    navigate1('/dashboard')
  } 
  return (
    <div className='bg-moon w-full h-screen font-quicksand'>
      <div className='flex justify-center pt-28'>
        <div className='block max-w-sm rounded-lg bg-white p-6 shadow-lg'>
          <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <img alt='logo'></img>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>

              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block w-full rounded-t-md border-0 pl-4 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-moss sm:text-sm sm:leading-6"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full rounded-b-md border-0 pl-4 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    className="group relative mb-2 flex w-full justify-center rounded-md bg-moss px-3 py-2 text-sm font-semibold text-white hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={navigateToDash}
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-white group-hover:text-white" aria-hidden="true" />
                    </span>
                    Sign in
                  </button>
                  <button className="group relative flex w-full justify-center rounded-md bg-moss px-3 py-2 text-sm font-semibold text-white hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={navigateToHome}>
                    Back to Home
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Login