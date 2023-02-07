import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar" fixed='top'>
            <Navbar.Brand href="#">Hello!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#aboutme">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>    
    )
    
};

export default MyNavbar;