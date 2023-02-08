import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import React from 'react';
import { Helmet } from 'react-helmet';
import BackgroundSlider from './components/backgroundSlider';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';

function App() {
  const navbarHeight = "8rem";
  return (
    <div className='App' >
      <Helmet>
        <title>Lee Xuanhui's Website</title>
        <meta name="description" content="My website" /> 
      </Helmet>
      <MyNavbar/>
      <BackgroundSlider>
        <Container fluid style={{position:"relative", zIndex:1, backgroundColor:'rgba(0,0,0,0.7)', paddingTop: navbarHeight}}>
          <AboutMe />
          <Projects />
          <Education/>
          <Contact/>
        </Container>

      </BackgroundSlider>
      <Footer/>
      
    </div>
  );
}

export default App;
