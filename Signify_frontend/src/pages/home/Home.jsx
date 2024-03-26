import React from 'react'
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HeroSection from '../../components/HeroSection'
import DescriptionSection from '../../components/DescriptionSection'
import DeviceSection from '../../components/DeviceSection'
import FaqSection from '../../components/FaqSection'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <DescriptionSection />
      <DeviceSection />
      <FaqSection/>
      <CTA />
      <Footer />
    </div>
  )
}

export default Home;
