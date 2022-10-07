/* eslint-disable react/prop-types */
import './HeroImg2Style.css'

import React, { Component } from 'react'

class HeroImg2 extends Component {
  render () {
    return (
            <div className="hero-img">
                <div className="heading">
                    <h1>{this.props.Heading}</h1>
                    <p>{this.props.Text} </p>
                </div>
            </div>
    )
  }
}

export default HeroImg2
