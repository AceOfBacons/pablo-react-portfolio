import React from "react";
import "./topbar.scss";
import { Gamepad, ContactPhone,AgricultureIcon  } from "@material-ui/icons";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <a href="#intro" className="logo">
              <img src="assets/mainLogo.png" alt="" />
            </a>
          </div>
          <div className="itemContainer">
            <ContactPhone className="icon" />
            <span>+1 (647)-562-4280</span>
          </div>
          <div className="itemContainer">
            <Gamepad className="icon" />
            <span>p.s.g2000@hotmail.com</span>
          </div>
          <div className="itemContainer">
          <a href="https://www.linkedin.com/in/pablo-saldarriaga-gonzalez/"><img src="assets/linke.png" alt="" className="icon"/></a>
          </div>
          <div className="itemContainer">
          <a href="https://github.com/AceOfBacons"><img src="assets/git.png" alt="" className="icon"/></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
