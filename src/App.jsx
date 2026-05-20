import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BigIdea from './components/BigIdea'
import HowItWorks from './components/HowItWorks'
import WhatItCreates from './components/WhatItCreates'
import BuiltForLocal from './components/BuiltForLocal'
import WhoItsFor from './components/WhoItsFor'
import MoneyAngle from './components/MoneyAngle'
import SamplePitch from './components/SamplePitch'
import CoreHooks from './components/CoreHooks'
import DemoVideo from './components/DemoVideo'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MatrixBackground from './components/MatrixBackground'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.section-fade').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <BigIdea />
          <HowItWorks />
          <WhatItCreates />
          <BuiltForLocal />
          <WhoItsFor />
          <MoneyAngle />
          <SamplePitch />
          <CoreHooks />
          <DemoVideo />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
