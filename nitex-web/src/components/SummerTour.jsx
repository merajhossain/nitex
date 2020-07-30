import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Table, Button } from 'react-bootstrap';
import listIconOne from '../assests/img/list-icon-1.png';
import listIconSecond from '../assests/img/list-icon-2.png';
import listIconThird from '../assests/img/list-icon-3.png';
import listIconForth from '../assests/img/list-icon-4.png';
import animationOne from '../assests/img/animation-man-1.png';
import animationSecond from '../assests/img/animation-man-2.png';
import animationThird from '../assests/img/animation-man-3.png';

const SummerTour = () => {

    const [scrollPosition, setPosition] = useState(0);
    
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

  

    return (
        <Container fluid={true} className="sec-space bg-primary product-list-animation-wrapper" >
            <Container className="text-center">
                <div className="sec-icon box-shadow">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="sec-title">
                    <h1>Available Summer Tours</h1>
                </div>
            </Container>
            <Container className="product-lits-wrapper">
                <Row>
                    <Col className="z-index-999">
                        <div className="table-responsive">
                            <Table>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="list-icon" >
                                            <img src={listIconOne} />
                                        </td>
                                        <td className="list-details">
                                            <h2>Hop On - Hop Off Boat (1 hours)</h2>
                                            <p>Get onboard one of our Hop On - Hop Off boat tours.</p>
                                        </td>
                                        <td className="list-price">
                                            <span className="amount">$25.00</span>
                                            <Button >Book</Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="list-icon">
                                            <img src={listIconSecond} />
                                        </td>
                                        <td className="list-details">
                                            <h2>Round City Bike Tour (5 hours)</h2>
                                            <p>Get onboard one of our Round City Bike Tour.</p>
                                        </td>
                                        <td className="list-price">
                                            <span className="amount">$35.00</span>
                                            <Button >Book</Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white" >
                                        <td className="list-icon">
                                            <img src={listIconThird} />
                                        </td>
                                        <td className="list-details">
                                            <h2>City Cable Car Tour (2 hours)</h2>
                                            <p>Get onboard one of our Round City Cable Car Tour.</p>
                                        </td>
                                        <td className="list-price">
                                            <span className="amount">$45.00</span>
                                            <Button >Book</Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white" >
                                        <td className="list-icon">
                                            <img src={listIconForth} />
                                        </td>
                                        <td className="list-details">
                                            <h2>Round City Panoramic (3 hours)</h2>
                                            <p>Get onboard one of our Round City Panoramic Tour.</p>
                                        </td>
                                        <td className="list-price">
                                            <span className="amount">$85.00</span>
                                            <Button >Book</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>

                </Row>
                <div className="product-list-animation-image-wrapper">
                    <div className={scrollPosition > 600 ? "animation-image-one move-animation-one" : 'animation-image-one'}>
                        <img src={animationOne} className="img-fluid"/>
                    </div>
                    <div className={scrollPosition > 600 ? "animation-image-second move-animation-second" : 'animation-image-second'}>
                        <img src={animationSecond} className="img-fluid"/>
                    </div>
                    <div className={scrollPosition > 600 ? "animation-image-third move-animation-third" : 'animation-image-third'}>
                        <img src={animationThird} className="img-fluid"/>
                    </div>
                </div>
            </Container>
        </Container>
    )
}


export default SummerTour;