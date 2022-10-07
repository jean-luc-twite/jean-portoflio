import './FooterStyle.css'

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <NavLink to="https://www.google.com/maps/place/592+francis+baard+street+pretoria/@-25.7479315,28.2085265,3a,75y,348.51h,90t/data=!3m4!1e1!3m2!1s_ATUFN0so62Tp0lotWSjRQ!2e0!4m2!3m1!1s0x1e9561f5cc104abd:0xf1bacd44b3ee4b26?sa=X&ved=2ahUKEwi-vKHticT6AhVeSkEAHe9UA54QxB16BAgIEAI"><div className="location">
                    <FaHome size={20} style={{
                      color:
                        '#fff',
                      marginRight: '2rem'
                    }}/>
                    <div>
                        <p>592 Francis Baard Street.</p>
                        <p>South Africa.</p>
                    </div>
                </div></NavLink>
                <div className="phone" >
                    <h4><FaPhone size={20} style={{
                      color:
                        '#fff',
                      marginRight: '2rem'
                    }} />
                    +27 65-658-6607.</h4>
                </div>
                <div className="email" >
                    <Link to="/contact">
                    <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    TwiteTech95@gmail.com</h4></Link>
                </div>
            </div>
            <div className="right">
                <h4>About The Company</h4>
                <p>this is me Jean-Luc Twite CEO & Founder Of T_Tech.
                    I enjoy discusing new Project and design challenges</p>
               <div className="social">
                  <NavLink to="https://www.facebook.com/profile.php?id=100084219211637"><FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }}/> </NavLink>
                  <NavLink to="https://www.linkedin.com/in/jean-luc-twite-4974071a4/"><FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }}/></NavLink>
                  <NavLink to="https://instagram.com/stg_technology?igshid=YmMyMTA2M2Y="><FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }}/></NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
