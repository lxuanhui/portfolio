import React, { useState, useEffect } from 'react';
import "./css/backgroundSlider.css"
import imageSlide from './backgroundSliderData';




const BackgroundSlider = ({children}) => {

    const[currentState,setCurrentState] = useState(0)
    const bgImageStyle ={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:'100%',
        
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
        <div className ="container-style" style={bgImageStyle}> 
        
        {children}
               
            
        </div>    
    )
    
};

export default BackgroundSlider;