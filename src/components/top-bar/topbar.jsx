import React from 'react'
import './topbar.scss'
import {Gamepad} from '@material-ui/icons';

export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>pablo.</a>
          <div className="itemContainer">
            <Gamepad className='icon'/>
            <span>Game Programmer</span>
          </div>
          <div className="itemContainer">
            <Gamepad className='icon'/>
            <span>Pablo</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
