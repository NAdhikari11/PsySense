import React from 'react';

const AboutUs = () => {
  return (
    <div className='w-full h-full bg-rouge text-white font-semibold font-quicksand scroll-smooth snap-y' id="about">
        <h1 className='w-4/5 ml-32 pt-8 pb-4 text-center text-2xl border-b-2 border-white font-semibold'>About Us</h1>
        
        <div className='w-4/5 ml-32'>
        <p className='pt-8'>
        Mental health is an increasing growing problem in today's society.<br></br>
        Mental health issues like Stress, Anxiety and Depression often hinder an individual's ability to go about regular day-to-day activites.<br></br>
        In addition to this, isolation and uncertainty caused due to COVID-19 has further exacerbated mental health issues.<br></br>
        </p><br></br>
        <p className='text-center font-semibold text-xl'>
        This is where PsySense comes in.<br></br>
        </p><br></br>
        <p className=''>
        PsySense measures physiological signals such as Heart Rate, Blood Pressure, Respiration Rate and Galvanic Skin Response to determine your stress levels.</p>
        <br></br><p className=''>
        Upon detecting stress levels past a certain threshold value, the following steps are taken:
        </p>
        <ul className='list-disc ml-8'>
            <li>If used in a corporate environment, the app notifies the HR of a potentially stressed employee, thereby attempting to minimize corporate suicides.</li>
            <li>Outside of a work environment, the app notifies family or other people close to you. <br></br> 
                If you happen to have a therapist, the app will notify them too. If not, then the app shall suggest therapists close to you.</li>
        </ul><br></br>
        <p className='pb-8'>During Sign Up, the app requires you to answer the questions of the DASS-21 test, on whose results will determine the extent of the user's 'Stress', 'Anxiety' and 'Depression'.
        <br></br>
        The severity of the application response depends on the category to which you're assigned.</p>
        
        </div>
        
    </div>
  )
}

export default AboutUs;