import React from "react";
import "../scss/layout/_home.scss";
import { Languages, MyName } from "../assets/Icons";
import { HomeGravity } from "../assets/Icons";

const Home = () => {  
  return (
    <div className="home">
      <div className="left-side">
          <MyName className="myName" />
          <p>
            I'm a Frontend Developer with a passion for user interface, design
            and development. I love experimenting with all sorts of new
            technologies and languages.
          </p>

        <a href="#view-work">View Work</a>
        <div>
          <Languages />
        </div>
      </div>
      <div className="right-side">
        <HomeGravity />
      </div>
    </div>
  );
};

export default Home;
