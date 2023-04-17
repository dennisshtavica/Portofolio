import React from "react";
import "../scss/layout/_images.scss"

import logoD from "./images/logoD.png"
import name from "./images/DENISSHTAVICA.svg"
import homeGravity from "./images/HomeGravity.svg"
import languages from "./images/languages.svg"
import work from "./images/Work.svg"
import exocraft from "./images/exocraft.svg"
import adventure from "./images/Adventure.svg"
import movieApp from "./images/MovieApp.svg"
import taskManagement from "./images/TaskManagement.svg"
import styx from "./images/Styx.svg"
import scriptUniverse from "./images/ScriptUniverse.svg"
import aboutMe from "./images/AboutMe.svg"
import getInTouch from "./images/Get in touch.svg"
import getInTouchImg from "./images/GetInTouchImg.svg"
import footer from "./images/Footer.svg"
import figmaLogo from "./images/figma.svg"
import Demo from "./images/Demo.svg"
import gitImg from "./images/GitImg.svg"

export const Logo = () => <img src={logoD} className=""></img>
export const MyName = () => <img src={name} className="myName"></img>
export const HomeGravity = () => <img src={homeGravity} className="homeGravity"></img>
export const Languages = () => <img src={languages} className="languages"></img>;
export const Work = () => <img src={work} className="work-header"></img>
export const Exocraft = () => <img src={exocraft} className="exocraft"></img>
export const Adventure = () => <img src={adventure}></img> 
export const MovieApp = () => <img src={movieApp} alt="" />
export const TaskManagement = () => <img src={taskManagement} alt="" />
export const Styx = () => <img src={styx}></img>
export const ScriptUniverse = () => <img src={scriptUniverse} alt="" />
export const Bio = () => <img src={aboutMe} className="aboutMe"></img>
export const GetInTouch = () => <img src={getInTouch} className="getintouch"></img>
export const GetInTouchImage = () => <img src={getInTouchImg} className="getInTouchImg" alt="" />
export const FooterImg = () => <img src={footer} alt="" />
export const FigmaLogo = () => <img src={figmaLogo} alt="" />
export const GitLogo = () => <img src={gitImg} alt="" />
export const DemoLogo = () => <img src={Demo} alt="" />