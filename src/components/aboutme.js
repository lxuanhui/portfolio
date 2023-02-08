import React from 'react';
import "./css/aboutme.css"
import { Col, Row, Container } from 'react-bootstrap';

const AboutMe = () => (
        <Container id='aboutme'>
            <Row>
                <div className="section-title text-center" data-aos="fade-up" data-aos-delay="100">
                    <br></br>
                    <h1>About Me</h1>
                    <hr
                        style={{
                        background: 'antiquewhite',
                        color: 'antiquewhite',
                        borderColor: 'antiquewhite',
                        height: '7px',
                        width: '30%',
                        display:'inline-block'
                        
                        }}
                    />
                </div>
                
                <Row>
                    
                    <Col lg={4} xs={12}>

                        <div className="portfoliopic" data-aos="fade-up" data-aos-delay="100"><img src="google.jpg" alt="Potrait"/></div>
                    </Col>
                    <Col lg={8} xs={12}>
                        <div xs={12} className="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                            <h2 className="fw-bold">Senior Computer Science Major at Nanyang Technological University</h2>
                            <p className="mb-0">Specialising in Cybersecurity and Data Science</p>
                            
                            <p className="mb-0">Graduating in December 2023!</p>
                        </div>
                        <div className="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                            <h2 className="fw-bold">Participated in an exchange semester at the University of Maryland</h2>
                        </div>
                    </Col>
                        
                </Row>							
            </Row>        
        </Container>
            
    
);

export default AboutMe

