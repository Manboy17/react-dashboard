import "./navbar.scss";
import search from "../../assets/search.svg";
import expand from "../../assets/expand.svg";
import notification from "../../assets/notifications.svg";
import setting from "../../assets/setting.svg";
import person from "../../assets/person.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Dash UI</div>
      <div className="links">
        <img src={search} alt="search" />
        <img src={expand} alt="expand" />
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
