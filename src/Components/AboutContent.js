import './AboutContentStyle.css'

import React from 'react'
import { Link } from 'react-router-dom'
import dev1 from '../assets/jlt.jpg'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
        <p>I am  Full Stack Software Developer. I create
          responsive secure websites and mobile Application for my Clients</p>
        <p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
       </p>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
              <img src={dev1} className="img" alt="jltImage"/>
            </div>

        </div>
    </div>
</div>
  )
}

export default AboutContent
