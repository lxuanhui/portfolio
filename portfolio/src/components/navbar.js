import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand href="#">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>    
    )
    
};

export default MyNavbar;