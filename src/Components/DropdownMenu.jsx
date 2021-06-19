import React, { useRef } from "react";
import liteArrow from "../images/icon-arrow-light.svg";
import "./DropdownMenu.styles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick.jsx";

const DropdownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>{props.dropDownCat}</span>
        <img
          src={liteArrow}
          alt="arrow"
          className={`arrow-icon ${isActive ? "active" : "inactive"}`}
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          {props.dropDownLinks.map((link) => {
            return (
              <li>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
