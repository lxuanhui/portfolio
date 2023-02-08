import React from 'react'
import { Row , Col} from 'react-bootstrap';

const projectfield = (props) => {
  return (
            <Row className="row" style={{padding:'3rem'}}>
                <Col xs ={12} lg={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="portfoliopic" data-aos="fade-up" data-aos-delay="100"><img src={props.image}alt="Potrait"/></div>
                </Col>
                <Col xs ={12} lg = {8} data-aos="fade-up" data-aos-delay="100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="projects-text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                        <h2 className="fw-bold">{props.title}</h2>
                        <p className="mb-0">{props.description}</p>
                    </div>
                </Col>
            </Row>
  )
}

export default projectfield;