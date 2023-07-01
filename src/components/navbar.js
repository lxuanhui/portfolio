import {React,useState,useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./css/navbar.css"

const MyNavbar = () => {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.pageYOffset;
        if (currentScrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        setLastScrollY(currentScrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
    return (
        <Navbar expand="lg" className="custom-navbar" fixed='top' hidden={hidden}>
            <Navbar.Brand href="#">Hello!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#aboutme">Home</Nav.Link>
                <Nav.Link href="#aboutme">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>    
    )
    
};

export default MyNavbar;