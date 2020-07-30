import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Table, Button } from 'react-bootstrap';


const SpecialMessage = () => {

    return (
        <Container fluid={true} className="special-msg-wrapper">
            <Container className="sec-space">
                <Col>
                    <div className="text-center">
                        <div className="sec-title pt-0">
                            <h1 className="text-white">Discover Copenhagen at<br /> your own pace</h1>
                        </div>
                        <div className="paragraph pt-4 text-white">
                            <p>An easy and calm way to get to the other side of the harbor, and the ticket <br/> you can enjoy a free beer or soda at the Reffen bars.</p>
                        </div>
                        <div className="pt-4 msg-button-wrapper">
                            <Button className="mr-3" variant="primary">Book a Tour</Button>
                            <Button  variant="outline-primary">More Info</Button>
                        </div>
                    </div>
                </Col>
            </Container>
        </Container>
    )
}


export default SpecialMessage;