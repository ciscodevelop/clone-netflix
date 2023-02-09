import { useState } from "react";
import "./navbar.scss";
import {
  ArrowDropDown,
  AccessAlarm,
  ThreeDRotation,
  Search,
  Notifications,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset <= 150 ? false : true);
  };

  return (
    <div className={isScroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="assets/logoNetflix.png" alt="" />
          <div className="links">
            <Link to={"/"}>
              <span>Home</span>
            </Link>
            <Link to={"/series"}>
              <span>Series</span>
            </Link>
            <Link to={"/movies"}>              
                <span>Movies</span>
            </Link>
            <Link to={"/"}>
              <span>New and Popular</span>
            </Link>
            <Link to={"/"}>
              <span>My List</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <Search className="icon" />
          <span> KID</span>
          <Notifications className="icon" />
          <img src="assets/ciscoImage.jpeg" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Seetting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
