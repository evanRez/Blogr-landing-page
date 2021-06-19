import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "./AppHeader.styles.css";
import Logo from "../images/logo.svg";
import burgerIcon from "../images/icon-hamburger.svg";

function AppHeader() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="header">
      <div className="topLine">
        <img className="header-logo" src={Logo} alt="logo" />
        <>
          <img
            src={burgerIcon}
            alt="hamburger-icon"
            className={`hamburger-icon ${isActive ? "active" : "inactive"}`}
            onClick={onClick}
          />
        </>
        <div className={`navbar-links ${isActive ? "active" : "inactive"}`}>
          <DropdownMenu
            dropDownCat="Product"
            dropDownLinks={[
              "Overview",
              "Pricing",
              "Marketplace",
              "Features",
              "Integrations",
            ]}
          />
          <DropdownMenu
            dropDownCat="Company"
            dropDownLinks={["About", "Team", "Blog", "Careers"]}
          />
          <DropdownMenu
            dropDownCat="Connect"
            dropDownLinks={["Contact", "Newsletter", "LinkedIn"]}
          />
          <div className="login-signup">
            <button className="btn no-border">Login</button>
            <button className="btn action signup">Sign Up</button>
          </div>
        </div>
      </div>

      <div className="div-to-center">
        <div className="intro-sentence-container">
          <h1 className="bigTitle">A modern publishing platform</h1>
          <h4 className="smallTitle">
            Grow your audience and build your online brand
          </h4>
        </div>
      </div>

      <div className="btn-callto-container">
        <button className="btn action">Start for Free</button>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
}

export default AppHeader;
