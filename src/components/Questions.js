import question from './question'
import React from 'react'

const Question = () => {
  return (
    question.map((question) => {
        return(
            <div className='border border-black m-10 font-quicksand rounded-lg p-4'>
                <p className='text-lg font-semibold'>{question.question}</p>
                <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Applied to me to some degree, or some of the time
                </label>
                <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                   Applied to me to a considerable degree or a good part of time
                </label>
                <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                   Applied to me very much or most of the time
                </label>
                <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                Did not apply to me at all
                </label>
            </div>
        )
    })
  )

}

export default Question