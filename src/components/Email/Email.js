import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactUs from '../FeatureAudio/Email.svg'; 

const Email = () => {
    return (
        <div>
            <Container>
            <Row>
                <br />
                <Col sm={12}>
                    <img src ={ContactUs} />
                </Col>
            </Row>
        </Container> 
        </div>
    );
}

export default Email;
