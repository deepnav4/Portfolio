import React from 'react';
import "./Contact.css";;
import contactimg from './contact.svg';
import { LuSend } from "react-icons/lu";
import image1 from './icons/email.png';
import image2 from './icons/telephone.png';
import image3 from './icons/location.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


const Contact = () => {
    return (
        <div className='contact-main-container'>
            <h1 className='contact-heading'>Contact</h1>
            <div class="contact-container main">
                <div class="form-container" >
                    <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
                        <div class="form-group">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" id="name" name='Name' class="form-input" required placeholder="What's your good name?"/>
                        </div>
                        <input type="hidden" name="access_key" value="06df05c0-5bfb-4aa4-a80e-aab9cc769ed5"></input>
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name='Email' class="form-input" required placeholder="What's your web address?"/>
                        </div>
                        <div class="form-group">
                            <label for="message" class="form-label">Message</label>
                            <textarea id="message" name='Message' class="form-input textarea" required placeholder="What you want to say?"></textarea>
                        </div>
                        <button type='submit' className='submit-btn'>Send <LuSend className='submit-icon'/></button>
                    </form>
                </div>

                <div className="social-section">
                    <div className="social-section1">
                        <div className="social">
                            <div className="social-icon">
                                <a href="mailto:workwithdeepnav@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src={image1} className='social-icon1' alt="Email Icon" />
                                </a>
                            </div>
                            <div className="social-text">
                                workwithdeepnav@gmail.com
                            </div>
                        </div>
                        <div className="social">
                            <div className="social-icon">
                                <a href="tel:+919478619241" target="_blank" rel="noopener noreferrer">
                                    <img src={image2} className='social-icon1' alt="Email Icon" />
                                </a>
                            </div>
                            <div className="social-text">
                                9478619241
                            </div>
                        </div>
                        <div className="social">
                            <div className="social-icon">
                                <a href="https://maps.app.goo.gl/eV7SZAV8zL5v2sWU6" target="_blank" rel="noopener noreferrer">
                                    <img src={image3} className='social-icon1' alt="Email Icon" />
                                </a>
                            </div>
                            <div className="social-text">
                                Abohar(152116), Punjab
                            </div>
                        </div>
                    </div>
                    <div className="social-links">
                        <div className="social-links1">
                        <a href='https://wa.me/+919478619241' target='_blank'>
                            <FaWhatsapp className='social-icons' alt="Whatsapp Icon" />
                        </a>
                        <a href='https://www.instagram.com/deep.i3_?igsh=MTV2dTdlYnIwZHg4cQ==' target='_blank'>
                            <FaInstagram className='social-icons' alt="Instagram Icon" />
                        </a>
                        <a href='https://www.linkedin.com/in/navdeep-singh-1554a8321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
                            <FaLinkedin className='social-icons' alt="LinkedIN Icon" />
                        </a>
                        </div>
                        <div className="social-links2">
                        <a href='https://github.com/deepnav4' target='_blank'>
                            <IoLogoGithub className='social-icons' alt="Github Icon" />
                        </a>
                        <a href='https://twitter.com/Navdeep67606112?t=ylhEd_jjz0ND05n5enkrAw&s=09' target='_blank'> 
                            <FaXTwitter className='social-icons' alt="X Icon" />
                        </a>
                        <a href='https://t.me/nav013' target='_blank'> 
                            <FaTelegramPlane className='social-icons' alt="Telegram Icon" />
                        </a>
                        </div>
                    </div>
                </div>
                <div className="social-image">
                    <img src={contactimg} />
                </div>
            </div>
        </div>
    )
}

export default Contact
