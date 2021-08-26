
import "./sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SettingTheme from "./SettingTheme"
import { Link, animateScroll as scroll } from "react-scroll";



const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="sidebar">
      <div className="sidebarAll">
        <div className="sidebarContainer">
          <div className="sidebarTop">
            <div className="SidebarTopImg">
              <img
                className="sidebarImg"
                src="assents/man.png"
                alt="Foto"
                className="sidebarImg"
              />
            </div>
            <h2 className="nombre" onClick={() => scrollToTop()}>
              Jeison <span>Imbana</span>{" "}
            </h2>
          </div>

          <div className="sidebarMedium">
            <ul className="sidebarItems">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <li
                  className="sidebarItem"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <span className="sidebarSubtitle">Inicio</span>
                </li>
              </Link>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <li
                  className="sidebarItem"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <span className="sidebarSubtitle">Sobre mí</span>
                </li>
              </Link>

              <Link
                to="portafolio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                <li
                  className="sidebarItem"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <span className="sidebarSubtitle">Portafolio</span>
                </li>
              </Link>

              <Link
                to="blogs"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <li
                  className="sidebarItem"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <span className="sidebarSubtitle">Blogs</span>
                </li>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <li
                  className="sidebarItem"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <span className="sidebarSubtitle">Contacto</span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarBottom">
            <div className="sidebarIcons">
              <a
                href="https://www.linkedin.com/in/jeison-imbana/"
                className="sidebarLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="sidebarIcon"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
              <a
                href="https://github.com/Imbana"
                className="sidebarLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="sidebarIcon"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </a>
              <a
                href="https://www.instagram.com/jeison_imbana/"
                className="sidebarLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="sidebarIcon"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>

          <SettingTheme className="settingSidebar"></SettingTheme>
        </div>
        <span className="sidebarRights">
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2021 All rights
          reserved
        </span>
      </div>
    </div>
  );
};

export default Sidebar
