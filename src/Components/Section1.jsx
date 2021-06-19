import React from "react";
import editor from "../images/illustration-editor-desktop.svg";
import "./Section1.styles.css";

function Section1() {
  return (
    <div className="section1-bg">
      <h2 className="section1-title">Designed for the future </h2>
      <div className="grid-container">
        <div className="text-column-1">
          <h4 className="section1-subtitle">
            Introducing an extensible editor
          </h4>
          <div className="section1-para">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </div>
          <h4 className="section1-subtitle">Robust content management</h4>
          <div className="section1-para">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </div>
        </div>
        <div className="editor-div">
          <img className="editor-img" src={editor} alt="editor" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
