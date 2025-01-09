import React from 'react';
import "./Skills2.css";
import EarthCanvas from "../canvas/Earth";
import StarsCanvas from "../canvas/Stars";

const Skills2 = () => {
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
        </div>
        <div className="cont1">
            <EarthCanvas className="earthCanvas"/>
        </div>
        <div className="cont2">
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
            </div>
        </div>
    </div>
  )
}

export default Skills2;
