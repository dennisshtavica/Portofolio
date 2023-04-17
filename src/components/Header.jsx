import React from 'react'
import { Logo } from '../assets/Icons'
import "../scss/layout/_header.scss"

const Header = () => {
    return (
      <header>
        {/* <div id="logo">
          <Logo />
        </div> */}
        <a href="" id='logo'>
            <Logo/>
        </a>

        <div className="navbar">
          <a href="#about-me">About</a>
          <a href="#contact-me">Contact</a>
          <a href="#view-work" className="vW-btn">
            View Work
          </a>
          {/* <div className='vW-btn'>
                    View Work
                </div> */}
        </div>
      </header>
    );
}

export default Header