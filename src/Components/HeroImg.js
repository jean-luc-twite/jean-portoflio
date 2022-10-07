import './HeroImgStyle.css'

import React from 'react'

import IntroImg from '../assets/intro.jpg'
import { Link } from 'react-router-dom'
import CV from '../assets/CV.pdf'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I AM JEAN-LUC TWITE</p>
               <h1> FULL STACK SOFTWARE DEVELOPER </h1>
               <div>
                <Link to ="/project" className="btn">Projects</Link>
                <Link to ={CV} className="btn btn-light">Download CV</Link>
               </div>
        </div>
    </div>
  )
}

export default HeroImg
