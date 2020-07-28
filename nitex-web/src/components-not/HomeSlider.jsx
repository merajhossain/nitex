import React from 'react';
import Container from 'react-bootstrap/Container'
import { Row, Col, Form, InputGroup, Button, FormControl } from 'react-bootstrap';


const HomeSlider = () => {
    return (
        <Container fluid={true} className="h-100">
            <Container className="h-100">
                <Row className="h-100 justify-content-center align-items-start hero-wrapper">
                    <div>
                        <Col className="slider-title-wrapper text-center">
                            <h1>City Of <br /><span>Compenhangen</span></h1>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                            <Form.Control as="select">
                                <option>Large select</option>
                            </Form.Control>
                                
                                <InputGroup.Prepend>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                </InputGroup.Prepend>
                                <InputGroup.Prepend>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                </InputGroup.Prepend>
                                <InputGroup.Prepend>
                                    <Button>Contact Us</Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}


export default HomeSlider;