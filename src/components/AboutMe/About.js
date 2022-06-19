import React from 'react'
import './About.css';
import {motion} from 'framer-motion';

export const About = () => {
  return (
      
    <div className='about' id='about'>
        <motion.div 
        whileInView={{ opacity : [0,1]}}
        transition={{ duration:1.5, ease: 'easeInOut'}}
        >
        <div>
            <h1>ABOUT <j>ME</j></h1>
        </div>
        <div className='container about-row' >
            <div className='image3'>
                {/* <img src='me.png' alt='me' /> */}
            </div>
            <div className='about-right'>
                 <h1>FRONT-END<j> DEVELOPER</j></h1>
                            <p>I am <strong>Anagu Andrew</strong>. I am a simple,creative,hard-working and fun-loving person.<br>
                               </br> I have always found it fulfilling to create projects which would help others</p>
                            <p>I have vast knowledge and experience in HTML5,CSS3,Javascript and React JS. 
                                I have created some projects over the years which are displayed
                                 in <j><strong>MY PROJECTS</strong></j>  section</p>
                                 <div className="about-text">
                                <div>
                                <p> Name: Anagu Chidiebere Andrew</p>
                                <p> Age: 18 years</p>
                                <p> Email: anaguchidiebere@gmail.com</p>
                                </div>
                                <div>
                                    <p>Phone:+234 813 518 8556</p>
                                    <p> Address: 120 Zik Avenue</p>
                                    <p> Hobby: football, Music and Coding </p>
                                </div>
                            </div>
                            <button><a href="to">DOWNLOAD CV</a></button>
            </div>

        </div>
        </motion.div>
    </div>
  )
}
