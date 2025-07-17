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

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="w-full h-auto px-4 py-5">
        <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-[#1f295e] via-[#3c5a9a] to-[#2aa8d8] text-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

          {/* 📢 Icon + Text */}
          <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
            <div className="bg-white text-[#1f295e] w-14 h-14 rounded-full flex items-center justify-center text-2xl font-extrabold shadow-lg shrink-0">
              %
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold leading-snug">
                Special Promo – Limited Time Only!
              </h2>
              <p className="text-sm md:text-base font-medium mt-1">
                Get a <span className="underline font-bold">20% discount</span> on your chemical clean + a no-obligation FREE quote when you fill our form.
              </p>
            </div>
          </div>

          {/* 🎯 Call to Action Button */}
          <div className="w-full md:w-auto">
            <a
              href="tel:+60123456789"
              className="block text-center bg-white text-[#1f295e] font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-md w-full md:w-auto"
            >
              📞 Call Now
            </a>
          </div>

        </div>
      </div>

      <CoolTechSection />
      <Services />
      <ServicesSection/>
      <WhyChooseUs />
      <Steps />
      <AchievementsSection />
      <BlogSlider />
      <Footer />
      <OpenIconSpeedDial />
    </>
  )
}
