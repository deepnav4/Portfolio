import React from 'react'
import "./Hero.css";
import gif from "./Navdeep-2.gif";
import skillsimg from "./skillss.png";
// import hero-img from "./hero.jpeg";

const Hero = () => {
  return (
    <div>
      <div className='hero' id='hero'>
        <img className='gif' src={gif}/>
        <img className='skills-img' src={skillsimg} data-aos="zoom-in"/>
      </div>
    </div>
  )
}

export default Hero
