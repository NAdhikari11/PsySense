import React from 'react'
import Dass from '../img/Dass.png';
import Navbar3 from '../components/Navbar3'

const Result = () => {
  return (
    <div className='bg-rouge'>
      <Navbar3 />
      <div className='h-auto py-20'>
            <div className='flex-justify-center h-4/5 w-3/4 bg-white mx-auto rounded-lg p-24 font-quicksand font-medium'>
                <h1 className='text-xl font-semibold border-b pb-2'>Results of the DASS-21 Test</h1>
                <p className='py-4'>The Depression, Anxiety and Stress Scale - 21 Items (DASS-21) is a set of three self-report scales designed to measure the emotional states of depression, anxiety and stress.</p>
                <p className='pb-4'>Each of the three DASS-21 scales contains 7 items, divided into subscales with similar content. </p>
                <ul className='list-disc'>
                  <li>The depression scale assesses dysphoria, hopelessness, devaluation of life, self-deprecation, lack of interest / involvement, anhedonia and inertia</li>
                  <li>The anxiety scale assesses autonomic arousal, skeletal muscle effects, situational anxiety, and subjective experience of anxious affect</li>
                  <li>The stress scale is sensitive to levels of chronic non- specific arousal. It assesses difficulty relaxing, nervous arousal, and being easily upset / agitated, irritable / over-reactive and impatient</li>
                </ul>
                <p className='py-4'>Scores for depression, anxiety and stress are calculated by summing the scores for the relevant items.</p>
                <img src = {Dass} alt = 'DASS-21 score card'/>
                <p className='py-4 font-semibold text-xl'>Your Result is: </p>
            </div>
        </div>
    </div>
    
  )
}

export default Result