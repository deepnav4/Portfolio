import React from 'react';
import "./Contact2.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";






const Contact2 = () => {
  const contactCards = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      text: "Reach out to me directly on WhatsApp for quick discussions.",
      link: "https://wa.me/+919478619241"
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      text: "Explore my creative side and follow me on Instagram.",
      link: "https://www.instagram.com/deep.i3_?igsh=MTV2dTdlYnIwZHg4cQ=="
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      text: "View my professional profile and connect with me on LinkedIn.",
      link: "https://www.linkedin.com/in/navdeep-singh-1554a8321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      icon: FaGithub,
      title: "Github",
      text: "Discover my coding projects and collaborations on GitHub repository.",
      link: "https://github.com/deepnav4"
    },
    {
      icon: FaXTwitter,
      title: "X",
      text: "Get in touch with me directly via X for inquiries.",
      link: "https://twitter.com/Navdeep67606112?t=ylhEd_jjz0ND05n5enkrAw&s=09"
    }
  ];

  return (
    <div className='main card-main'>
      <div className="card-heading">
        Let's Connect !
      </div>
      <div className="cards">
        {contactCards.map((card, index) => (
          <div className="card" key={index}>
            <a href={card.link} target='_blank' rel="noreferrer">
              <div className="card-content">
                {React.createElement(card.icon, { className: 'contact-icon' })}
                <div className="card-text">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact2;
