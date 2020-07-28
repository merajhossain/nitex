import React from 'react';
import Container from 'react-bootstrap/Container'
import { Row, Col, Form, InputGroup, Button, FormControl } from 'react-bootstrap';


const HomeSlider = () => {
    return (
        <div className="h-100 home-slider-wrapper">
        <Container fluid={true} className="h-100">
            <Container className="h-100">
                <Row className="h-100 justify-content-center align-items-start hero-wrapper">
                    <div>
                        <Col className="slider-title-wrapper text-center">
                            <h1>City Of <br /><span>Compenhangen</span></h1>
                        </Col>
                        <Col className="searchWrapper">
                            <InputGroup className="mb-3">

                            <Form.Control as="select" className="locationDropdown">
                                <option>Choose Location</option>
                            </Form.Control>
                                <InputGroup.Prepend className="dateInputWrapper">
                                <FormControl
                                    className="dateInput"
                                    placeholder="Date"
                                    aria-label="Date"
                                />
                                </InputGroup.Prepend>
                                <InputGroup.Prepend>
                                <FormControl
                                    className="guestsInput"
                                    placeholder="Guests"
                                    aria-label="Guests"
                                />
                                </InputGroup.Prepend>
                                <InputGroup.Prepend>
                                    <Button className="custom-primary-btn">Search</Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                    </div>
                </Row>
            </Container>
        </Container>
        </div>
    )
}


export default HomeSlider;