import React from 'react';
// import "./education.css"


const Education = () => (
    <section id='experience'className="education-section section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <br></br>
                        <h1>Experience</h1>
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
                            
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className='row'>
                                    <div className="col-12">
                                        <div className="text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                                            <h2 className="fw-bold">Software Engineer Intern at GovTech Singapore</h2>
                                            <p className="text-muted">May 2023 - Present</p>
                                            <ul style={{color:'white', textAlign:'left'}}>
                                                <li>Conducted research and evaluation of ML/DL models, utilizing open-source tools such as SDV and YData, to generate synthetic tabular data; models used included CTGAN, Gaussian Copula, etc.</li>
                                                <br/>                                                
                                                <li>Contributed to the development of the product using TypeScript, NextJS, Mantine, and a serverless backend leveraging Amazon Web Services</li>
                                                <br/>
                                                <li>Collaborated on UI/UX design, leveraging Figma for prototyping and design collaboration, ensuring an intuitive and user-friendly product interface.</li>
                                                <br/>
                                                <li>Employed Jira for project management and issue tracking to maintain team efficiency and meet project deadlines</li>
                                            </ul>
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