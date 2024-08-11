import React, { useEffect } from 'react'
import TopBar from '../../components/CountryPage/TopBar'
import CountryHeroSection from '../../components/CountryPage/CountryHeroSection'
import Modules from '../../components/CountryPage/Modules'

const CountryPage = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='flex flex-col'>
        <TopBar/>
        <CountryHeroSection/>
        <Modules/>
      </div>
    </div>
  )
}

export default CountryPage