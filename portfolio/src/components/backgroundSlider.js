import React, { useState, useEffect } from 'react';
import "./backgroundSlider.css"
import imageSlide from './backgroundSliderData';



const BackgroundSlider = () => {

    const[currentState,setCurrentState] = useState(0)
    const bgImageStyle ={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        maxwidth: '100%',
        height: '979px',
        opacity:0.15,
        // filter:'blur(3px)',
        transition: 'background-image 2s linear',
        backgroundRepeat:'repeat-y',
        
        
    }
    useEffect(() => {
        let intervalId = setInterval(() => {
            setCurrentState((currentState + 1) % imageSlide.length);
        }, 3000);
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