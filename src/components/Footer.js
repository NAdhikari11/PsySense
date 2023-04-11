import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around w-full h-auto bg-moss font-quicksand text-white py-8'>
        <div className=''>
          <p className='font-semibold border-b hover:text-slate-900 hover:border-slate-900'>Contact Us:</p>
          <p className='pt-2 hover:text-slate-900'>Email: PsySense@gmail.com</p>
          <p className='pt-2 hover:text-slate-900'>Phone: 74986 96490</p>
        </div>
        <div>
          <p className='font-semibold border-b hover:text-slate-900 hover:border-slate-900'>Additional References:</p>
          <p className='pt-2'>
          <a href='https://www.nimh.nih.gov/' className='hover:text-slate-900'>National Institute of Mental Health</a><br></br>
          <a href='https://www.betterhelp.com/' className='hover:text-slate-900'>Better Help</a><br></br>
          <a href='https://www.mentalhealth.gov/' className='hover:text-slate-900'>MentalHealth.gov</a></p>
        </div>
    </div>
  )
}

export default Footer