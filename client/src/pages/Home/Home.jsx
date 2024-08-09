import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import CountrySection from '../../components/Home/CountrySection'

const Home = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-8 flex flex-col gap-4'>
        <HeroSection/>
        <CountrySection/>
    </div>
  )
}

export default Home