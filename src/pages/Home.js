import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import KnowMore from '../components/KnowMore';
import Psysense from '../components/Psysense';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='scroll-smooth snap-y'>

      <Psysense />
      <AboutUs />
      <KnowMore />
      <Footer />  
    </div>

  )
}

export default Home