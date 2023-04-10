import React from 'react';
import over from '../img/overstimulated.jpg'

const KnowMore = () => {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover scroll-smooth' style={{ backgroundImage: `url(${over})` }} id='know'>
      <div style={{ backgroundColor: `rgba(0, 0, 0, 0.8)` }} className='w-full h-full text-white'>
        <div className='w-4/5 ml-32 pt-8 font-quicksand'>
          <h1 className=' text-center text-2xl border-b-2 border-white font-semibold pb-4'>Know More</h1><br></br>
          <ul className='list-disc'>
            <li className='font-semibold'>Anxiety disorders may be either: </li>
              <ul className='list-decimal ml-8'>
                <br></br>
                <li className='font-semibold'>Panic disorders</li>
                <p>Causes panic attacks at anytime, anywhere, without warning
                  <br></br>
                  Symptoms include: Fast Hearbeat, Chest Pain, Difficulty in breathing, Dizziness</p><br></br>
                <li className='font-semibold'>Phobias</li>
                <p>Strong irrational fear of something that poses little to no danger.
                  Symptoms include: Panic and fear, Rapid heartbeat, Shortness of breath, Trembling, A strong desire to get away
                </p> <br></br>
                <li className='font-semibold'>Obessessive Compulsive Disorder(OCD)</li>
                <p>Having repeating, upsetting thoughts is called obsession and repeating actions to make those thoughts go away is called compulsion</p>
                <br></br>
              </ul>

            <li className='font-bold'>Warning Signs of Suicidal Behaviour: <br></br></li>
              <ul className='ml-8 list-decimal'>
                <li>Talking about wanting to die or to kill oneself</li>
                <li>Talking about feeling hopeless or having no reason to live</li>
                <li>Talking about feeling trapped or in unbearable pain</li>
                <li>Withdrawing or feeling isolated</li>
                <li>Sleeping too little or too much</li>
                <li>Acting anxious or agitated; behaving recklessly</li>
              </ul>
            
            <br></br>
            <li className='font-bold'>Post Traumatic Stress Disorder<br></br></li>
              <p className='ml-4'>Symptoms include: Flashbacks, or feeling like the event is happening again, Trouble sleeping or nightmares</p>
            
          </ul>

        </div>
      </div>

    </div>
  )
}

export default KnowMore;