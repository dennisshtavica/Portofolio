import React from "react";
import { Link } from "react-router-dom";
import { FooterImg } from "../assets/Icons";
import "../scss/layout/_footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="dots">
        <div className="socials-ctn">
          <div className="socials">
            <Link to="https://github.com/dennisshtavica">// github</Link>
            <Link to="https://www.linkedin.com/in/denisshtavica/">
              linkedin
            </Link>
            <Link to="https://www.instagram.com/dennishtavica/">instagram</Link>
            <br />
            <a href="#about-me">// about</a>
            <a href="#contact-me">contact</a>
          </div>
        </div>
      </div>
      {/* <FooterImg/> */}
    </footer>
  );
};

export default Footer;
