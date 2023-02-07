import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import React from 'react';
import { Helmet } from 'react-helmet';
import BackgroundSlider from './components/backgroundSlider';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>Lee Xuanhui's Website</title>
        <meta name="description" content="My website" /> 
      </Helmet>
      <MyNavbar/>
      <BackgroundSlider/>
    </div>
  );
}

export default App;
