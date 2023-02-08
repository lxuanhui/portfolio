import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="custom-footer py-3">
    <Container>
      <Row className="gy-5">
        <Col className="col-md-4">
            <h2 className="text-left text-white "> 
                Lee Xuanhui
            </h2>
            <p className="text-left text-secondary">
                Thank you for visiting my website!
            </p>
            
            <span id='icons-list' style={{float:'left'}}>
                
                <a href="https://github.com/lxuanhui">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                
                <a href="https://linkedin.com/in/xuanhui-lee">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                
                <a href="https://t.me/lxuanhui">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                
            </span>                    
        </Col>
        <Col className="col-md-4">
          
        </Col>
        <Col className="col-md-4">
            <h2 className="text-left text-white "> 
                Contact
            </h2>
            <p className="text-left text-secondary">
                Email: xuanhui98@gmail.com
            </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;