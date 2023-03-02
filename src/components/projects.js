import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import "./css/projects.css"
import ProjectField from './projectfield';
import ProjectData from './projectsData';

const Projects = () => (
    <Container id='projects'>
        
            <Row>
                <Col lg={true}>
                    <div className="section-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <br></br>
                        <h1>Projects</h1>
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
                        <h2 style={{textAlign:"center", color:"white", fontSize:"1.5rem", padding:'5px'}}>Here are some projects that I have done - both in school and externally</h2>
                    </div>
                </Col>
                {ProjectData.projects.map((project, index) => (
                    <ProjectField
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        date={project.date}
                        
                    />
                ))}                        
            </Row>
        
    </Container>
)

export default Projects;
                        