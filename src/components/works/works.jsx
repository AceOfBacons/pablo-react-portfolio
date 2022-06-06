import React, { useState } from 'react'
import './works.scss'
import LightSpeed from 'react-reveal/LightSpeed';

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Intermediate skills in various aspects of front-end web development with vanilla ReactJS, JavaScript, jQuery, HTML, CSS, SCSS, Bootstrap 5 and Node EJS and Intermediate skills in back-end web development with Node and JSX. As well able to handle document-oriented databases with MongoDB",
      img:
        "./assets/webDev.jpg",
    },
    {
      id: "2",
      icon: "./assets/console.png",
      title: "Game Programming",
      desc:
        "Hands-on experience with Unity engine; including PC, Android and WebGL games/builds. Skilled in gameplay programming; including Finite state machines systems, wave spawning networks and player movement mechanics.",
      img:
        "./assets/gameProg.jpeg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Generalist Programmer",
      desc:
        "Proficiency in object-oriented programming with C# and C++ and Java using Visual Studio 2019 and Eclipse and intermediate understanding of python. Intermediate experience in basic relational databases with Oracle SQL",
      img:
        "./assets/prog.jpg",
    },
  ];

  const handleClick = (way) =>{
    way === 'left' ? setCurrentSlider(currentSlider > 0 ? currentSlider -1 : 2) :
    setCurrentSlider(currentSlider < data.length -1 ? currentSlider + 1 : 0);
  }

  return (
    <div className='works' id='works'>
      <LightSpeed left duration={1200}>
      <h1>Services</h1>
      </LightSpeed>
      <div className='slider' style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map((d)=>(
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
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick('left')}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick('right')}/>
    </div>
  )
}
