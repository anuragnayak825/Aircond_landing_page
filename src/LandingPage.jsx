import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import CoolTechSection from './CoolTechSection '
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Steps from './Steps'
import BlogSlider from './BlogSlider'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoolTechSection />
      <Services/>
      <WhyChooseUs/>
      <Steps/>
      <BlogSlider/>
      <Footer/>
    </>
  )
}
