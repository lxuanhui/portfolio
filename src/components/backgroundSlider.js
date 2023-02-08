import React, { useState, useEffect } from 'react';
import imageSlide from './backgroundSliderData';
import { Container } from 'react-bootstrap';




const BackgroundSlider = ({children}) => {

    const[currentState,setCurrentState] = useState(0)
    const bgImageStyle ={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:'100%',
        transition: 'background-image 2s linear',
        backgroundRepeat:'repeat',

    }
    useEffect(() => {
        let intervalId = setInterval(() => {
            setCurrentState((currentState + 1) % imageSlide.length);
        }, 10000);
        return () => clearInterval(intervalId);
    }, [currentState]);
    return(
        <Container fluid className ="container-style p-0" style={bgImageStyle} >         
            {children}
        </Container>    
    )
    
};

export default BackgroundSlider;