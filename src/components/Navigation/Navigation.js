import React, {useState} from 'react';
import './Navigation.css';
import {FaBars, FaTimes} from 'react-icons/fa';

export const Navigation = () => {
  const[click, setClick] = useState(false);
  const toggle = () => setClick(!click);
  
  return (
    <header >
          <h1><a href='#home'>ANDREW</a></h1>
              <nav>
                <ul className={click ? 'nav-menu nav-active' : 'nav-menu'}>
                  <li><a href='#home'>HOME</a></li>
                  <li><a href='#about'>ABOUT</a></li>
                  <li><a href='#projects'>PROJECTS</a></li>
                  <li><a href='#testimonals'>TESTIMONIALS</a></li>
                  <li><a href='#contact'>CONTACT-ME</a></li>
                </ul>
              </nav>
                  <div onClick={toggle} className='nav-btns'>
                 { click ?  <FaTimes color='white'/>: <FaBars color='white'/>}
                  </div>
          
    </header>
  )
}
