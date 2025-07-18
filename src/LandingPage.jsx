import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import CoolTechSection from './CoolTechSection '
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Steps from './Steps'
import BlogSlider from './BlogSlider'
import Footer from './Footer'
import OpenIconSpeedDial from './OpenIconSpeedDial'
import AchievementsSection from './AchievementsSection'
import ServicesSection from './ServicesSection'
import { FaBolt, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import OfferSection from './OfferSection'
import ContactACSection from './ContactACSection'
export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoolTechSection />
      <div className="w-full h-auto px-4 py-5">
        <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-[#1f295e] via-[#3c5a9a] to-[#2aa8d8] hover:scale-[1.010] transition  text-white p-6 md:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

          {/* 📢 Icon + Text */}
          <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold leading-snug">
                exclusive Offer!
              </h2>
              <p className="text-sm md:text-base font-medium mt-1">
                Don’t miss your chance! WhatsApp us now and grab this special offer while it lasts.
              </p>
            </div>
          </div>

          {/* ✅ WhatsApp CTA Button */}
          <div className="w-full md:w-auto">
            <a
              href="https://wa.me/60163824522"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-[#25D366] font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-md w-full md:w-auto flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>


      <OfferSection />
      <Services />
      {/* <ServicesSection /> */}
      <WhyChooseUs />
      <Steps />
      <AchievementsSection />
      <BlogSlider />

      {/* <ContactACSection/> */}
      <Footer />
      <OpenIconSpeedDial />
    </>
  )
}
