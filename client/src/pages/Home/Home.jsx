import React, { useEffect } from 'react'
import HeroSection from '../../components/Home/HeroSection'
import CountrySection from '../../components/Home/CountrySection'
import { Link } from 'react-router-dom'
import doubleUp from './../../assets/images/home/double-up.svg'
import Footer from '../../components/Home/Footer'

const Home = () => {

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className='max-w-[1200px] mx-auto py-8 flex flex-col gap-4'>
        <div className='h-[1px]' id="top"></div>
        <HeroSection/>
        <CountrySection/>
        <div onClick={()=>scrollToSection('top')} className='bg-primary p-4 text-xl text-white  flex justify-center' href='#top' ><img width={32} src={doubleUp} /></div>
       
    </div>
  )
}

export default Home