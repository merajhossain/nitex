import React, { useLayoutEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Table, Button, Media } from 'react-bootstrap';
import serviceImageBefore from '../assests/img/service-image-before.png';
import serviceImage from '../assests/img/service-image.png';

const ServicesPart = () => {

    const [topRightPosition, setPosition] = useState(0);
    
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
        <Container fluid={true} className="service-wrapper bg-primary">
            <div className="sec-space">
                <Container className="text-center">
                    <div className="sec-icon box-shadow">
                        <i class="fa fa-compass" aria-hidden="true"></i>
                    </div>
                    <div className="sec-title">
                        <h1>Nyhavn-Reffen Boat Services</h1>
                    </div>
                </Container>
                <Container className="m-t-90">
                    <Row>
                        <Col lg={6}>
                            <div className="service-image-wrapper">
                                <div className={topRightPosition > 2000 ? 'service-image text-center light-head' : 'service-image text-center'}>
                                    <img src={serviceImage} className="img-fluid" />
                                    <img src={serviceImageBefore} className={topRightPosition > 2000 ? 'img-fluid animate__animated animate__fadeOut' : 'img-fluid animate__animated'} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={6} className={topRightPosition > 2000 ? 'animate__animated animate__fadeInDown' : ''}>
                                    <Media>
                                        <Media.Body>
                                            <h5 className="color-primary">1. Ticket</h5>
                                            <p>Refshaleoen of Reffen is one of Copenhagen's up and coming areas, which is slowly tuming from an industrial wasteland into.</p>
                                        </Media.Body>
                                    </Media>
                                </Col>
                                <Col lg={6} className={topRightPosition > 2000 ? 'animate__animated animate__fadeInDown' : ''}>
                                    <Media>
                                        <Media.Body>
                                            <h5 className="color-warning">1. Boat</h5>
                                            <p>The trendy street food market offers fantastic treats for the taste buds. You will discover a large array of international cuisins and local</p>
                                        </Media.Body>
                                    </Media>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span: 6, offset: 6 }} className={topRightPosition > 2000 ? 'animate__animated animate__fadeInDown' : ''}>
                                    <Media>
                                        <Media.Body className="mb-0">
                                            <h5 className="color-success">1. Boat</h5>
                                            <p>The trendy street food market offers fantastic treats for the taste buds. You will discover a large array of international cuisins and local</p>
                                        </Media.Body>
                                    </Media>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}


export default ServicesPart;