import React from 'react'
import stats from '../img/stats.jpg';

const Sync = () => {
   
    return (
        <div className='w-full h-auto bg-no-repeat bg-cover' style={{backgroundImage: `url(${stats})`}} id = "sync">
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}} className='w-full h-96'>
                <div className='flex justify-around w-5/6 h-4/5 rounded-lg bg-slate-700 mx-auto items-center font-quicksand translate-y-9'>
                    <div className='h-48 w-80 bg-no-repeat bg-cover font-quicksand rounded-lg' style={{ backgroundImage: `url(${stats})` }}>
                    
                    </div>
                    <div className='font-2xl font-semibold text-white'>
                        <h2 className='pb-2'>Sync And Anaylse Data</h2>
                        <button className='bg-moss text-white rounded-full w-24 h-8 mx-auto'>Sync</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Sync