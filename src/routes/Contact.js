import React from 'react'
import Footer from '../Components/Footer'
import Forms from '../Components/Forms'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
const Contact = () => {
  return (

    <div>
       <Navbar />
       <HeroImg2 Heading="CONTACT" Text="Let Have A Chat" />
       <Forms />
       <Footer />
    </div>
  )
}

export default Contact
