import React from 'react';
import "./Skills2.css";
<<<<<<< HEAD
import skillsImg from "./expBlack.svg";
=======
>>>>>>> e1cceeb (changes)
import EarthCanvas from "../canvas/Earth";
import StarsCanvas from "../canvas/Stars";

const Skills2 = () => {
<<<<<<< HEAD
  return (
    <div className='cont' >
        <div className="main-cont">
        <StarsCanvas/>
=======
  const skills = [
    { 
      name: "Web/UX Design", 
      level: 70,
      color: "#7CB9E8"
    },
    { 
      name: "FrontEnd", 
      level: 75,
      color: "#F0E68C"
    },
    { 
      name: "Backend", 
      level: 45,
      color: "#DEB887"
    },
    { 
      name: "Databases", 
      level: 60,
      color: "#FFB6C1"
    },
    { 
      name: "Programming", 
      level: 70,
      color: "#98FB98" // Light green, matching the style of other pastel colors used
    }
  ];

  return (
    <div className='cont'>
        <div className="main-cont">
          <StarsCanvas/>
>>>>>>> e1cceeb (changes)
        </div>
        <div className="cont1">
            <EarthCanvas className="earthCanvas"/>
        </div>
        <div className="cont2">
<<<<<<< HEAD
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
=======
            <div className="container glass-effect" data-aos="fade-left">
                {/* Skill Bars */}
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <span className="title">{skill.name}</span>
                        <div className="skill-bar">
                            <span 
                                className="skill-per" 
                                style={{
                                    width: `${skill.level}%`,
                                    backgroundColor: skill.color
                                }}
                            />
                        </div>
                    </div>
                ))}
>>>>>>> e1cceeb (changes)
            </div>
        </div>
    </div>
  )
}

export default Skills2;
