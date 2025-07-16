import { useState } from 'react'

import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThankYou from './ThankYou'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='thank-you' element={<ThankYou />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
