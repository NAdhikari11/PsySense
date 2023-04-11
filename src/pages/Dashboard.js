import React from 'react'
import Profile from '../components/Profile'
import Schedule from '../components/Schedule'
import Find from '../components/Find'
import Sync from '../components/Sync'
import Stats from '../components/Stats'
import Test from '../components/Test'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className='bg-eggshell scroll-smooth' id="dash">
        <Profile />
        <Schedule />
        <Find />
        <Sync />
        <Stats />
        <Test />
        <Footer />
    </div>
  )
}

export default Dashboard