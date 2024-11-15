import React from 'react'
import "./Education.css";
import educationImage from './education.svg';

const Education = () => {
    return (
        <div className='education-upperDiv'>
            <h1>Education</h1>
            <div className="main edu-main">
                <div className="left-main">
                    <img src={educationImage} alt="Education" />
                </div>
                <div className="right-main">
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
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Education
