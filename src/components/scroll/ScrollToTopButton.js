// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import your CSS file for styling

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button 
            className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}
            onClick={scrollToTop}
            title="Go to top"
        >↑
        </button>
    );
};

export default ScrollToTopButton;
