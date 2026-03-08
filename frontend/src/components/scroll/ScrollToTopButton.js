import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
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
        <button 
            className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}
            onClick={scrollToTop}
            title="Go to top"
        >↑
        </button>
    );
};

export default ScrollToTopButton;
