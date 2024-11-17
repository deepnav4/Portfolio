import React from 'react';
import "./Skills2.css";
import skillsImg from "./expBlack.svg";
import EarthCanvas from '../Canvas/Earth';
import StarsCanvas from '../canvas/Stars';

const Skills2 = () => {
  return (
    <div className='cont' >
        <div className="main-cont">
        <StarsCanvas/>
        </div>
        <div className="cont1">
            <EarthCanvas className="earthCanvas"/>
        </div>
        <div className="cont2">
            <div class="container" data-aos="fade-left">
                <div class="skill-box">
                    <span class="title">HTML</span>
                    <div class="skill-bar">
                        <span class="skill-per html">
                            <span class="tooltip">90%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">CSS</span>
                    <div class="skill-bar">
                        <span class="skill-per css">
                            <span class="tooltip">82%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">JavaScript</span>
                    <div class="skill-bar">
                        <span class="skill-per javascript">
                            <span class="tooltip">45%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">ReactJS</span>
                    <div class="skill-bar">
                        <span class="skill-per reactjs">
                            <span class="tooltip">73%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">C</span>
                    <div class="skill-bar">
                        <span class="skill-per c">
                            <span class="tooltip">81%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">C++</span>
                    <div class="skill-bar">
                        <span class="skill-per cpp">
                            <span class="tooltip">68%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills2;
