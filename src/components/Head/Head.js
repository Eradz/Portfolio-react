import React from 'react';
import './head.css';
import Typical from 'react-typical';
import { motion } from 'framer-motion';
import { StaticNav } from '../StaticNav/StaticNav';


export const Head = () => {
 
  return (
    <div id='home' className='container header' >
         <div className='headd' >
            <motion.div
            whileInView={{ scale: [0,1]}}
            transition={{ duration: 1}}
            >
           <div className='img-container'>
           <div className='img'></div>
            </div>
            </motion.div>
            <div className='details'>
                  <h2> Hey! There</h2>
                  <h3>I am <w>Anagu Chidiebere Andrew</w></h3>
                  <div className='typical'>
                    <p>
                      <Typical
                      loop={Infinity}
                      steps={[
                        "Website Developer",
                        1000,
                        "Full stack Developer",
                        1000,
                        "React and React-native",
                        1000,
                      ]}
                      >
                        
                      </Typical>
                    </p>
                    <button><a href="#about">About Me</a></button>
                    </div>

            </div>
                <div className='icons'>
                
                <a href="https://web.facebook.com/chidianagu.andrew">
                <span><i className='uil uil-facebook-f'></i></span>
                </a>
                <a href="https://wa.me/2348135188556">
                <span> <i className='uil uil-whatsapp'></i></span>
                </a>
                <a href="https://twitter.com/snsnjsis?t=a6Bs77rslQMcZIZktzU4UA&s=09">
                <span> <i className='uil uil-twitter'></i></span>
                </a>
                <a href="https://www.instagram.com/andrewanagu">
                <span><i className='uil uil-instagram'></i></span>
                </a>
                <a href="https://www.linkedin.com/in/chidiebere.anagu-5850b2237">
               <span> <i className='uil uil-linkedin'></i></span>
                </a>
                </div>
        </div>
        <StaticNav/>
    </div>               
  )
}

