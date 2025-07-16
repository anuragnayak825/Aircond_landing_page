import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import CoolTechSection from './CoolTechSection '
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Steps from './Steps'

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoolTechSection />
      <Services/>
      <WhyChooseUs/>
      <Steps/>
    </>
  )
}
