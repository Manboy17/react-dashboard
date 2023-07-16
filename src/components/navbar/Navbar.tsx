import "./navbar.scss";
import search from "../../assets/search.svg";
import expand from "../../assets/expand.svg";
import notification from "../../assets/notifications.svg";
import setting from "../../assets/setting.svg";
import person from "../../assets/person.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Dash UI
      </Link>
      <div className="links">
        <img src={search} alt="search" className="icon" />
        <img src={expand} alt="expand" className="icon" />
        <div className="notification">
          <img src={notification} alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={person} alt="person" />
          <span>Dave</span>
        </div>
        <img src={setting} alt="setting" />
      </div>
    </div>
  );
};

export default Navbar;
