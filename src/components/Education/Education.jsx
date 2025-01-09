import React from 'react'
import "./Education.css";
import educationImage from './education.svg';

const Education = () => {
<<<<<<< HEAD
=======
    const educationData = [
        {
            period: "2008-2015",
            title: "Primary Education",
            institution: "Dayanand Anglo Vedic Haripura, Punjab",
            icon: "https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg"
        },
        {
            period: "2015-2024",
            title: "Secondary Education",
            institution: "Brahmrishi Mission School Abohar, Punjab",
            icon: "https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg"
        },
        {
            period: "2024-Present",
            title: "Engineering",
            institution: "Dr. BR Ambedkar National Institute of Technology, Jalandhar, Punjab",
            icon: "https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg"
        }
    ];

>>>>>>> e1cceeb (changes)
    return (
        <div className='education-upperDiv'>
            <h1>Education</h1>
            <div className="main edu-main">
                <div className="left-main">
                    <img src={educationImage} alt="Education" />
                </div>
                <div className="right-main">
<<<<<<< HEAD
                    <div class="education-section">
                    <div class="education-card" data-aos="fade-up"data-aos-anchor-placement="bottom-bottom" >
                            <div class="icon"><img class="iicon" src="https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg" /></div>
                            <div class="content">
                                <h6>2008-2015</h6>
                                <h4>Primary Education</h4>
                                <h5>Dayanand Anglo Vedic Haripura, Punjab</h5>
                            </div>
                        </div>
                        <div class="education-card" data-aos="fade-up"data-aos-anchor-placement="bottom-bottom"  >
                            <div class="icon"><img class="iicon" src="https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg" /></div>
                            <div class="content">
                                <h6>2015-2024</h6>
                                <h4>Secondary Education</h4>
                                <h5>Brahmrishi Mission School Abohar, Punjab</h5>
                            </div>
                        </div>
                        <div class="education-card" data-aos="fade-up"data-aos-anchor-placement="bottom-bottom"  >
                            <div class="icon"><img class="iicon" src="https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg" /></div>
                            <div class="content">
                                <h6>2024-Present</h6>
                                <h4>Engineering</h4>
                                <h5>Dr. BR Ambedkar National Institute of Technology, Jalandhar, Punjab</h5>
                            </div>
                        </div>
                        
=======
                    <div className="education-section">
                        {educationData.map((edu, index) => (
                            <div 
                                className="education-card" 
                                key={index}
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                            >
                                <div className="icon">
                                    <img className="iicon" src={edu.icon} alt={edu.title} />
                                </div>
                                <div className="content">
                                    <h6>{edu.period}</h6>
                                    <h4>{edu.title}</h4>
                                    <h5>{edu.institution}</h5>
                                </div>
                            </div>
                        ))}
>>>>>>> e1cceeb (changes)
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> e1cceeb (changes)
    )
}

export default Education
