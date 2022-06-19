import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';

export const Project = () => {
  return (

    <div id= 'projects'>
        <motion.div
        whileInView={{ y: [200, 0], opacity: [0,1]}}
        transition= {{ duration: 1.5}}
        >
        <h1>My <j>Projects</j></h1>
        <div className='project-row'>
                <div className='project-box'>
                    <div className='image1'>
                    {/* <img src='project1.png' alt='project' /> */}
                    </div>
                    <p> My first website</p>
                    <button><a href='https://chi-iota.vercel.app/2/home.html'>View Project</a></button>
                </div>
                <div className='project-box'>
                    <div className='image2'>
                    {/* <img src='project1.png' alt='project' /> */}
                    </div>
                    <p> My Portfolio</p>
                    <button><a href='https://chi-iota.vercel.app/2/home.html'>View Project</a></button>
                </div>
                <div className='project-box'>
                    <div className='image1'>
                    {/* <img src='project1.png' alt='project' /> */}
                    </div>
                    <p> My first website</p>
                    <button><a href='https://chi-iota.vercel.app/2/home.html'>View Project</a></button>
                </div>
                <div className='project-box'>
                    <div className='image1'>
                    {/* <img src='project1.png' alt='project' /> */}
                    </div>
                    <p> My first website</p>
                    <button><a href='https://chi-iota.vercel.app/2/home.html'>View Project</a></button>
                </div>
        </div>
        </motion.div>
    </div>
  )
}
