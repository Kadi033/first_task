import { Link } from "react-router-dom";
import logo from "../../assets/download.svg";
import Button from "../button/Button";
import "./Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="leftSideContainer">
        <div className="logo">
          <img src={logo} alt="/" />
        </div>
        <nav className="firstNavBar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/assignment-3">Assignment-3</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/profile">Profile</Link> 
        </nav>
      </div>

      <nav className="secondNavBar">
        <a href="/">What’s New</a>
        <a href="/">Help</a>
        <Button text="Contact Us" width="120px" />
      </nav>
    </div>
  );
}

export default Header;
