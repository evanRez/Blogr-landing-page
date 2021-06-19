import React from "react";
import "./Footer.styles.css";
import Logo from "../images/logo.svg";

const ProductArr = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Features",
  "Integrations",
];

const CompanyArr = ["About", "Team", "Blog", "Careers"];

const ConnectArr = ["Contact", "Newsletter", "LinkedIn"];

function Footer() {
  return (
    <div className="bgDarkBlue">
      <div className="flex-grid">
        <div className="col">
          <img className="footer-logo" src={Logo} alt="logo" />
        </div>
        <div className="col">
          <div className="col-title">Product</div>
          {ProductArr.map((cat) => {
            return <div className="cat">{cat}</div>;
          })}
        </div>
        <div className="col">
          <div className="col-title">Company</div>
          {CompanyArr.map((cat) => {
            return <div className="cat">{cat}</div>;
          })}
        </div>
        <div className="col">
          <div className="col-title">Connect</div>
          {ConnectArr.map((cat) => {
            return <div className="cat">{cat}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
