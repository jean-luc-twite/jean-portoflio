import React from 'react'

import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import PricingCard from '../Components/PricingCard'

const Services = () => {
  return (
    <div>
    <Navbar />
      <HeroImg2 Heading="SERVICES." Text="My Services packages, You can expect to hear from us, Do not hesitated to Contact us." />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Services
