import React from 'react'
import "../scss/components/_lineBreak.scss";
import { Bio } from '../assets/Icons';


const AboutMe = () => {

    return (
      <div id="about-me">
        <div className="lineBreak"></div>
        <br />
        <br />
       <Bio/>
      </div>
    );

}

export default AboutMe