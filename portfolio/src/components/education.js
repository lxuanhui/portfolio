import React from 'react';
// import "./education.css"


const Education = () => (
    <section id='education'className="education-section section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <br></br>
                        <h1>Education and Experience</h1>
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
                        </div></div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                                        <h2 className="fw-bold">Nanyang Technological University, Bachelor of Engineering (Computer Science)</h2>
                                        <p className="text-muted">Aug 2019 - Present</p>
                                        
                                        <p className="mb-0">Graduating in December 2023!</p>
                                </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className='row'>
                                    <div className="col-12">
                                        <div className="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                                            <h2 className="fw-bold">Fullstack Developer Intern at FoodLine.sg</h2>
                                            <p className="text-muted">Dec 2021 - May 2022</p>
                                            <ul style={{color:'white', textAlign:'left'}}>
                                                <li>Developed, maintained, and tested frontend and backend components using LAMP stack (Laravel, Apache, MySQL, PHP) </li>
                                                <br/>                                                
                                                <li>Collaborated with staff from operations, marketing, and sales departments to develop features on website for business requirements</li>
                                                <br/>
                                                <li>Designed, implemented and tested features to support company's expansion into Malaysia</li>
                                            </ul>
                                        </div>
                                    </div>    

                                </div>
                
                            </div>
							
                        </div>
						

                        </div>
   
            </div>
    </section>
);

export default Education;