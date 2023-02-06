import React from 'react';
import "./aboutme.css"


const AboutMe = () => (
    <section id='aboutme'className="about-me-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <br></br>
                        <h1>About Me</h1>
                        <hr
                            style={{
                            background: 'grey',
                            color: 'grey',
                            borderColor: 'grey',
                            height: '7px',
                            width: '30%',
                            display:'inline-block'
                            
                            }}
                        />
                        </div></div>
                        <div class="row">
                            
                            <div class="col-4">

                                <div class="portfoliopic" data-aos="fade-up" data-aos-delay="100"><img src="google.jpg" alt="Potrait"/></div>
                            </div>
                            <div class="col-8" data-aos="fade-up" data-aos-delay="100">
                
                                <div class="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                                    <h2 class="fw-bold">Senior Computer Science Major at Nanyang Technological University</h2>
                                    
                                    <p class="mb-0">Graduating in December 2023!</p>
                                </div>
								<div class="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                                    <h2 class="fw-bold">Participated in an exchange semester at the University of Maryland</h2>
                                </div>
                            </div>
							
                        </div>
						

                        </div>
   
            </div>
    </section>
);

export default AboutMe

