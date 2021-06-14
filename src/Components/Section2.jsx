import React from "react";
import CellPhone from "../images/illustration-phones.svg";
import "./Section2.styles.css";

function Section2() {
  return (
    <div className="blueBg">
      <div className="grid-container">
        <div>
          <img
            src={CellPhone}
            className="cellPhoneDemo"
            alt="cell phone displays"
          />
        </div>
        <div className="section2-text">
          <h3 className="section2-title">State of the Art Infrastructure</h3>
          <p className="section2-para">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
