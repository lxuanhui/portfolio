import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import React from 'react';
import { Helmet } from 'react-helmet';
import BackgroundSlider from './components/backgroundSlider';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Education from './components/education';


function App() {
  const navbarHeight = "8rem";
  return (
    <div className='App'>
      <Helmet>
        <title>Lee Xuanhui's Website</title>
        <meta name="description" content="My website" /> 
      </Helmet>
      <MyNavbar/>
      <BackgroundSlider>
        <div style={{position:"relative", zIndex:1, backgroundColor:'rgba(0,0,0,0.7)', paddingTop: navbarHeight}}>
          <AboutMe />
          <Projects />
          <Education/>
        </div>

      </BackgroundSlider>
      
    </div>
  );
}

export default App;
