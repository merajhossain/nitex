import React from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assests/img/footer-logo.png';
const Footer = () => {
    return (
        <div>
            <div className="sec-space contact-wrapper">
                <Container className="text-center">
                    <div className="sec-title">
                        <h1>Discover Copenhagen <br /> Places With Us</h1>
                    </div>
                    <div className="paragraph pt-4">
                        <p>An easy and calm way to get to the other side of the harbor, and the ticket <br /> you can enjoy a free beer or soda at the Reffen bars.</p>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Form className="contact-form-wrapper">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Phone" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Button variant="primary">
                                    Send Request
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid={true} className="footer-wrapper">
                <Container>
                    <Row className="align-items-md-center">
                        <Col lg={3} md={12} sm={12}>
                            <div className="logo">
                                <img src={logo} className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="menu-wrapper">
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link href="/not-found">City Tour</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/not-found">Local Guide</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/not-found">Bus Tour</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/not-found">Bike Ride</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={3} md={12} sm={12}>
                            <div className="social-menu">
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link><i className="fa fa-facebook"></i></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><i className="fa fa-twitter"></i></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><i className="fa fa-instagram"></i></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Footer;