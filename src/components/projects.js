import React, { useState } from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import "./css/projects.css"
import ProjectField from './projectfield';
import ProjectData from './projectsData';
import CompetitionsData from './competitionsData';
const Projects = () => {
    const [showProjects, setShowProjects] = useState(true);

    const handleClick = () => {
        setShowProjects(!showProjects);
    };
    const dataToDisplay = showProjects ? ProjectData.projects : CompetitionsData.competitions;

    return (
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
                        <h2 style={{textAlign:"center", color:"white", fontSize:"1.5rem", padding:'5px'}}>Here are some projects that I have done - both in school and externally
                            <p style={{textAlign:"center", color:"white", fontSize:"1rem", padding:'5px'}}>Toggle betwen Software Engineering Projects and Capture The Flag competitions</p>
                        </h2>
                        <button onClick={handleClick}>
                            {showProjects ? 'Show Capture The Flags' : 'Show SWE Projects'}
                        </button>
                    </div>
                </Col>
                {dataToDisplay.map((item, index) => (
                <ProjectField
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    date={item.date}
                />
                ))}                    
            </Row>
        
    </Container>
    );

}

export default Projects;
                        