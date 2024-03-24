import React from 'react'
import HeroSection from '../../components/HeroSection'
import DescriptionSection from '../../components/DescriptionSection'
import DeviceSection from '../../components/DeviceSection'
import FaqSection from '../../components/FaqSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <DescriptionSection />
      <DeviceSection />
      <FaqSection/>
    </div>
  )
}

export default Home
