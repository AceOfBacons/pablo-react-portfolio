import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Intro() {
  const words = [" Gameplay Programmer", " Level Designer", " Full-Stack Developer", " Web designer"];
  const { text } = useTypewriter({
      words,
      loop: 0, // Infinite
  });

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello there! I am</h2>
          <h1>Pablo Saldarriaga</h1>
          <h3>Junior:   
            <span>
              <Typewriter
                words={words}
                loop
                cursor
                cursorStyle='_'
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
  )
}
