import React from 'react'
import AboutContent from '../Components/AboutContent'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
const About = () => {
  return (
    <div>
    <Navbar />
      <HeroImg2 Heading="ABOUT." Text="I am a friendly a Full Stack Software Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
