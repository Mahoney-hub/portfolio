import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#home"><i className="fas fa-home"></i><span>home</span></a>
            <a href="#about"><i className="fas fa-user"></i><span>about</span></a>
            <a href="#portfolio"><i className="fas fa-briefcase"></i><span>portfolio</span></a>
            <a href="#contact"><i className="fas fa-address-book"></i><span>contact</span></a>
        </nav>
    );
};

