import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assests/img/logo.png';

const Header = () => {
    
    return (
        <Container className="position-relative" >
            <Navbar className="top-menu-wrapper" collapseOnSelect expand="lg">
                <Link to="/" className="navbar-brand"><img src={logo} className="img-fluid" /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/not-found">City Tour</Nav.Link>
                        <Nav.Link href="/not-found">Local Guide</Nav.Link>
                        <Nav.Link href="/not-found">Bus Guide</Nav.Link>
                        <Nav.Link href="/not-found">Bike Ride</Nav.Link>
                    </Nav>
                    <Nav className="top-menu-btn-wrapper">
                        <Button className="mr-3" variant="outline-primary">Get App</Button>
                        <Button>Contact Us</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;