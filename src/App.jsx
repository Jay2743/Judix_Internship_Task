import { useState } from 'react'
import Navbar from './Components/Navbar'
import MidSection from './Components/MidSection'
import Slider from './Components/Slider'
import Specification from './Components/Specification'
import ExpertConsultationSec from './Components/ExpertConsultationSec'
import Overview from './Components/Overview'
import Footer from './Components/Footer'
import './App.css'
function App() {


  return (
    <>
      <Navbar/>
      <MidSection/>
      <Slider/>
      <Specification/>
      <ExpertConsultationSec/>
      <Overview/>
      <Footer/>
    </>
  )
}

export default App
