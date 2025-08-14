import { useState } from 'react'

import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThankYou from './ThankYou'
import PrivacyPolicy from './PrivacyPolicy'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/kuala-lumpur/' element={<LandingPage />} />
          <Route path='/kuala-lumpur/thank-you' element={<ThankYou />} />
          <Route path='/kuala-lumpur/privacy-policy' element={<PrivacyPolicy/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
