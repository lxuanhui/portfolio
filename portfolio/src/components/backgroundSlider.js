import React, { useState, useEffect } from 'react';
import "./backgroundSlider.css"
import imageSlide from './backgroundSliderData';



const BackgroundSlider = () => {

    const[currentState,setCurrentState] = useState(0)
    const bgImageStyle ={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100vh',
        opacity:0.5,
        filter:'blur(3px)',
        transition: 'background-image 2s linear'
    }
    useEffect(() => {
        let intervalId = setInterval(() => {
            setCurrentState((currentState + 1) % imageSlide.length);
        }, 10000);
        return () => clearInterval(intervalId);
    }, [currentState]);
    return(
        <div className ="container-style">
            <div style={bgImageStyle}>
            </div>
        </div>    
    )
    
};

export default BackgroundSlider;