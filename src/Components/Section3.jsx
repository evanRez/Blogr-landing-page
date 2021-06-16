import React from "react";
import laptop from "../images/illustration-laptop-mobile.svg";
import "./Section3.styles.css";

function Section1() {
  return (
    <div className="section1-bg">
      <div className="grid-container-sec-3">
        <div className="laptop-div">
          <img className="laptop-img" src={laptop} />
        </div>
        <div className="text-column">
          <h4 className="section3-subtitle">Free, open, simple</h4>
          <div className="section3-para">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </div>
          <h4 className="section3-subtitle">Powerful tooling</h4>
          <div className="section3-para">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
