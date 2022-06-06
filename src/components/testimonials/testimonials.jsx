import React from 'react'
import './testimonials.scss'
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

export default function testimonials() {
  const data = [
    {
      id: 1,
      name: "Dohyun Kim",
      title: "CC Game Developer",
      img:
        "assets/dohyun.jfif",
      icon: "assets/video-game.png",
      desc:
        "Through working on several projects with Pablo, I learned that he has strong leadership and communication skills. He contributed a lot to the groups being able to form strong relationships among the members, and thanks to that, I enjoyed every moment working with him.",
    },
    {
      id: 2,
      name: "Mark Carpenter",
      title: "Senior Director of Business Development at ImageOn Print",
      img:
        "assets/mark.jfif",
      icon: "assets/youtube.png",
      desc:
        "Pablo is an exceptional student and a hard working individual. He clearly takes pride in his work and it shows with the level of professionalism that he engages in. I highly recommend Pablo as a future employee for organizations that want someone they can rely on. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <LightSpeed duration={1200}>
      <h1>Testimonials</h1>
      </LightSpeed>
      <div className="container">
        {data.map(d=>(
        <div className={d.featured ? 'card featured' : 'card'}>
          <div className="top">
            <img src="assets/right-arrow.png" className='left' alt="" />
            <img className='user' src={d.img} alt="" />
            <img className='right' src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <Fade bottom>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
          </Fade>
          
        </div>
        ))}
      </div>
    </div>
  )
}
