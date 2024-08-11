import React from 'react'
import TopBar from '../../components/CountryPage/TopBar'
import CountryHeroSection from '../../components/CountryPage/CountryHeroSection'
import Modules from '../../components/CountryPage/Modules'

const CountryPage = () => {
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