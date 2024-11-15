import { Link } from 'react-scroll';
import React, { useState } from 'react';
import "./Header.css";
import name from "./name.gif";
import Hamburger from 'hamburger-react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); 
  const [isOpen, setOpen] = useState(false);   
  const handleLinkClick = (link) => {
      setActiveLink(link);
      setOpen(false);
      document.body.style.overflow = '';
  };


  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
      setOpen(!isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden'; // Prevent scrolling when sidebar is open
  };

  return (
    <div className='main-header'>
      <div className='navbar'>
        <Link to='hero' smooth={true} offset={0} duration={500} className='innavbar' onClick={() => handleLinkClick('home')}>Home</Link>
        <Link to='about' smooth={true} offset={-150} duration={500} className='innavbar' onClick={() => handleLinkClick('about')}>About</Link>
        <Link to='skills' smooth={true} offset={-50} duration={500} className='innavbar' onClick={() => handleLinkClick('skills')}>Skills</Link>
        <Link to='projects' smooth={true} offset={-50} duration={500} className='innavbar' onClick={() => handleLinkClick('projects')}>Projects</Link>
        <Link to='contact' smooth={true} offset={-20} duration={500} className='innavbar' onClick={() => handleLinkClick('contact')}>Contact</Link>
        <div className={`animation start-${activeLink}`}></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to='hero' smooth={true} offset={0} duration={500} className='insidebar' onClick={() => handleLinkClick('home')}>Home</Link>
        <Link to='about' smooth={true} offset={-150} duration={500} className='insidebar' onClick={() => handleLinkClick('about')}>About</Link>
        <Link to='skills' smooth={true} offset={-50} duration={500} className='insidebar' onClick={() => handleLinkClick('skills')}>Skills</Link>
        <Link to='projects' smooth={true} offset={-50} duration={500} className='insidebar' onClick={() => handleLinkClick('projects')}>Projects</Link>
        <Link to='contact' smooth={true} offset={-20} duration={500} className='insidebar' onClick={() => handleLinkClick('contact')}>Contact</Link>
      </div>
      <div className="topbar-div">
        <div className="topbar">
          <img src={name} alt="Logo" />
          <Hamburger toggled={isOpen} toggle={toggleSidebar} className="topbar-img1" />
        </div>
      </div>
    </div>
  );
}

export default Header;