import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";
import "./Scroll.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [borderWidth, setBorderWidth] = useState(0); // Initial border width

    const toggleVisibility = () => {
        const scrollY = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.min(1, scrollY / documentHeight); // Calculate scroll percentage

        if (scrollY > 300) {
            setIsVisible(true);
            // Set border width based on scroll percentage (0 to 100)
            setBorderWidth(scrollPercentage * 100); // Fill border width based on scroll percentage
        } else {
            setIsVisible(false);
            setBorderWidth(0); // Reset to no border when at the top
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='scrollbtn'
                    style={{ 
                        borderWidth: `${borderWidth}%`, // Dynamic border width
                        borderColor: '#FFFFFF', // Fixed border color
                        borderStyle: 'solid' // Fixed border style
                    }}
                >
                    <IoMdArrowRoundUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;