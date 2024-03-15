import React, { useState } from "react";
import "./works.scss";
import LightSpeed from "react-reveal/LightSpeed";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Intermediate skills in various aspects of front-end web development with ReactJS, vanilla JavaScript, jQuery HTML, CSS & SCSS, Bootstrap 5 and Node EJS and proficient  in back-end web development with Node. Intermediate experience basic relational databases with Oracle SQL and document-oriented databases with MongoDB, and data manipulation with Rest API and GraphQL.",
      img: "./assets/webDev.jpg",
    },
    {
      id: "2",
      icon: "./assets/console.png",
      title: "Game Programming",
      desc: "Hands-on experience with Unity and Unreal Engine 5 including UI programming and design, performance optimization, level design for PC/Web/Android builds. I am also able to handle networking tools for games with Photon, and cloud data analysis platforms with Microsoft PlayFab. Skilled in gameplay programming covering: Finite state machines systems for AI, wave spawning networks and player movement mechanics.",
      img: "./assets/gameProg.jpeg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Generalist Programmer",
      desc: "Proficiency in object-oriented programming with C#, C++ and Java using Visual Studio/Eclipse and intermediate understanding of Python.",
      img: "./assets/prog.jpg",
    },
    {
      id: "4",
      icon: "./assets/qa_image.png",
      title: "QA Testing",
      desc: "Expertise in test management/agile testing with JIRA and TestRail, being able to ensure timely and quality delivery; by logging, tracking and resolving bugs & issues. On another hand I also posses experience in test documentation and planning, including creating and maintaining comprehensive test plans, test cases, and test reports. Finally I possess experience in automated testing frameworks with Selenium, and multiple manual testing techniques such as regression testing, functional, Whitebox, BlackBox, smoke, performance, exploratory and destructive testing.",
      img: "./assets/prog.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <LightSpeed left duration={1200}>
        <h1>Services</h1>
      </LightSpeed>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <LightSpeed left duration={1200}>
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  </LightSpeed>
                </div>
              </div>

              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
