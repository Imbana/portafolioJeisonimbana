import "./navbar.css"
import SettingTheme from "../components/SettingTheme";
import { Link } from "react-scroll";

const Navbar = ({activeMenu, setActiveMenu }) => {

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Jeison <span> Imbana</span>
        </Link>
      </div>
      <div className="navbarRight">
        <SettingTheme></SettingTheme>
        <div
          onClick={() => setActiveMenu(!activeMenu)}
          className={activeMenu ? "navbarHamburger active" : "navbarHamburger"}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar
