import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const FeatureClick = () =>{
    return (
    <div> 
        <Container>
            <Row>
                <br />
                <Col sm={12}>
                    <img src ={FeatureClickImg} />
                </Col>
            </Row>
        </Container> 
    </div>
    );
}

export default FeatureClick;