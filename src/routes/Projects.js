import React from 'react'

import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'
const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 Heading="PROJECTS." Text="Most Of My Recent works." />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Projects
