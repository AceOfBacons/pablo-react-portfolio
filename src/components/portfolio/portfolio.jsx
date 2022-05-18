import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/portfolioList.jsx'
import './portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'Unity3d',
      title: 'Unity 3D',
    },
    {
      id: 'Unity2d',
      title: 'Unity 2D',
    },
    {
      id: 'web',
      title: 'Web Apps',
    },
  ];
  
  useEffect(()=>{
    
    switch(selected){
      case 'featured':
      setData(featuredPortfolio)
      break;
      case 'Unity3d':
      setData(mobilePortfolio)
      break;
      case 'Unity2d':
      setData(designPortfolio)
      break;
      case 'web':
      setData(contentPortfolio)
      break;  
    }
    
  },[selected])
  
  return (
    <div className='portfolio' id='portfolio'>
    <h1>Portfolio</h1>
    <ul>
    {list.map((item)=>(
      <PortfolioList
      title={item.title}
      active={selected === item.id}
      setSelected={setSelected}
      id={item.id}
      />
      ))}
      </ul>
      <div className="container">
      {data.map((d) => (
        <div className="item">
        <img src={d.img} alt="" />
        <h3>{d.title}</h3>
        </div>
        ))}
        </div>
        </div>
        )
      }
      