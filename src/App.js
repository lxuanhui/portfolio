import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from './components/aboutme';
import Navbar from './components/navbar';
import Experience from './components/experience';

function App() {
  const navbarHeight = "8rem";
  return (
    <div className='App' >
      <Helmet>
        <title>Lee Xuanhui's Website</title>
        <meta name="description" content="My website" /> 
      </Helmet>
      <Navbar />
      <AboutMe />
      <Experience />    
    </div>
  );
}

export default App;
