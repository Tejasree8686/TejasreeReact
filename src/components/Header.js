import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnreact, setbtnreact] = useState("login");
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li>Cart</li>
          <button className="loginbtn" onClick={()=>{
           btnreact == "login" ? setbtnreact("logout") : setbtnreact("login")
          }}>{btnreact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
