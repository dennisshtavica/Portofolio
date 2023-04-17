import React, { useState } from "react";
import "../scss/components/_lineBreak.scss";
import "../scss/layout/_images.scss";
import "../scss/layout/_workSections.scss";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
// import Dropdown from "./Dropdown";
import {
  Exocraft,
  Work,
  Adventure,
  MovieApp,
  TaskManagement,
  Styx,
  ScriptUniverse,
  FigmaLogo,
  DemoLogo,
  GitLogo,
} from "../assets/Icons";

const WorkSection = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);

  return (
    <div className="work-section" id="view-work">
      <div className="lineBreak"></div>
      <Work />
        <div className="projects">
          <div className="exocraft">
            <Exocraft />
            <ul>
              <li className="nav-item" onClick={() => setDropdown(!dropdown)}>
                <li className="nav-links">Visit</li>
                {dropdown ? (
                  <ul className="dropdown-menu">
                    <li className="flex-links">
                      <FigmaLogo />
                      <Link
                        to="https://www.figma.com/file/FNRlDaUGcv9YrXx0aqxQVg/Exocraft?t=fkz8LRVYtDn6HUIk-6"
                        className="dropdown-link"
                      >
                        Figma
                      </Link>
                    </li>
                    <li className="flex-links">
                      <DemoLogo />
                      <Link
                        to="https://exocraft.netlify.app/"
                        className="dropdown-link"
                      >
                        Live
                      </Link>
                    </li>
                    <li className="flex-links">
                      <GitLogo />
                      <Link
                        to="https://github.com/dennisshtavica/Exocraft"
                        className="dropdown-link"
                      >
                        Github
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
          <div className="exocraft">
            <Adventure />
            <ul>
              <li className="nav-item" onClick={() => setDropdown2(!dropdown2)}>
                <li className="nav-links">Visit</li>
                {dropdown2 ? (
                  <ul className="dropdown-menu">
                    <li className="flex-links">
                      <GitLogo />
                      <Link
                        to="https://github.com/dennisshtavica/Adventure"
                        className="dropdown-link"
                      >
                        Github
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div className="projects">
          <div className="exocraft">
            <MovieApp />
            <ul>
              <li className="nav-item" onClick={() => setDropdown3(!dropdown3)}>
                <li className="nav-links">Visit</li>
                {dropdown3 ? (
                  <ul className="dropdown-menu">
                    <li className="flex-links">
                      <FigmaLogo />
                      <Link
                        to="https://www.figma.com/file/6tWjVpsO7Cw0Gw3CTZERkR/CinemaApp?node-id=0-1&t=7NbCTDCdw8yWC2xj-0"
                        className="dropdown-link"
                      >
                        Figma
                      </Link>
                    </li>
                    <li className="flex-links">
                      <GitLogo />
                      <Link
                        to="https://github.com/dennisshtavica/CinemaApp"
                        className="dropdown-link"
                      >
                        Github
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
          <div className="exocraft">
            <TaskManagement />
            <ul>
              <li className="nav-item" onClick={() => setDropdown4(!dropdown4)}>
                <li className="nav-links">Visit</li>
                {dropdown4 ? (
                  <ul className="dropdown-menu">
                    <li className="flex-links">
                      <FigmaLogo />
                      <Link
                        to="https://www.figma.com/file/RyA2YOMPbycG77IVOeFK79/Task-managment?node-id=1-2&t=S2PMls5nBCdsRHRP-0"
                        className="dropdown-link"
                      >
                        Figma
                      </Link>
                    </li>
                    <li className="flex-links">
                      <GitLogo />
                      <Link
                        to="https://github.com/dennisshtavica/TaskManagement"
                        className="dropdown-link"
                      >
                        Github
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div className="projects">
          <div className="exocraft">
            <Styx />
            <ul>
              <li className="nav-item" onClick={() => setDropdown5(!dropdown5)}>
                <li className="nav-links">Visit</li>
                {dropdown5 ? (
                  <ul className="dropdown-menu">
                    <li className="flex-links">
                      <FigmaLogo />
                      <Link
                        to="https://www.figma.com/file/0J0PZ97tfog2VvR4DDGlG9/Untitled?t=fkz8LRVYtDn6HUIk-6"
                        className="dropdown-link"
                      >
                        Figma
                      </Link>
                    </li>
                    <li className="flex-links">
                      <GitLogo />
                      <Link
                        to="https://github.com/dennisshtavica/LyricsApi"
                        className="dropdown-link"
                      >
                        Github
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
          <div className="exocraft">
            <ScriptUniverse />
            <ul>
              <li className="nav-item" onClick={() => setDropdown6(!dropdown6)}>
                <li className="nav-links">Visit</li>
                {dropdown6 ? (
                  <ul className="dropdown-menu">
                    <li className="flex-links">
                      <FigmaLogo />
                      <Link
                        to="https://www.figma.com/file/ZMXsAooyyXdrW4ul0l12WD/Script-Universe?node-id=0-1&t=wcEygOwx6hfVsCNi-0"
                        className="dropdown-link"
                      >
                        Figma
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default WorkSection;
