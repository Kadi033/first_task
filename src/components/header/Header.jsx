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
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
        </nav>
      </div>

      <nav className="secondNavBar">
        <a href="/">What’s New</a>
        <a href="/">Help</a>
        <Button />
      </nav>
    </div>
  );
}

export default Header;
