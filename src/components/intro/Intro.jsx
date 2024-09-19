import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Zoom from "react-reveal/Zoom";

export default function Intro() {
  const words = [" QA Engineer", " Full-Stack Developer", " Web Designer"];
  const { text } = useTypewriter({
    words,
    loop: 0, // Infinite
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <Zoom duration={1700}>
            <img src="assets/profile.png" alt="" />
          </Zoom>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello there! I am</h2>
          <h1>Pablo Saldarriaga</h1>
          <h3>
            Experienced:
            <span>
              <Typewriter
                words={words}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={75}
                deleteSpeed={50}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
