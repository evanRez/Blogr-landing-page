import React from "react";
import "./Footer.styles.css";

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
        <h1 className="footer-title">Blogr</h1>
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
