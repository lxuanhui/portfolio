import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from './components/aboutme';
import Navbar from './components/navbar';
import Experience from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';
import { DarkModeProvider } from './components/darkmodecontext';

function App() {
  return (
    <DarkModeProvider>
      <div className='App' >
        <Helmet>
          <title>Lee Xuanhui's Website</title>
          <meta name="description" content="My website" />
        </Helmet>
        <Navbar />
        <AboutMe />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
