import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Head } from './components/Head/Head';
import { About } from './components/AboutMe/About';
import { Project } from './components/Projects/Project';
import { Testimonals } from './components/Testimonals/Testimonals';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Head/>
      <About/>
      <Project/>
      <Testimonals/>
      <Contact/>
      <Footer/>         
      
  

    </div>
  );
}

export default App;
