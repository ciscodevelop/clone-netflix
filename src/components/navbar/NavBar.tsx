import { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown,AccessAlarm, ThreeDRotation, Search, Notifications } from '@mui/icons-material';


const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false)
  window.onscroll = () => {
    setIsScroll(window.pageYOffset <= 150 ? false : true);    
  }
   
  return (
    <div className={isScroll?'navbar scrolled':'navbar'}>
      <div className="container">
        <div className="left">
          <img src="assets/logoNetflix.png" alt="" />
          <div className="links">
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span> KID</span>
          <Notifications className="icon"/>
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
