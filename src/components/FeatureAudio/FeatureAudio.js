import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FeatureAudioImg from './FeatureAudio.svg';

const FeatureAudio = () =>{
    return (
    <div> 
        <Container>
            <Row>
                <br />
                <Col sm={12}>
                    <img src ={FeatureAudioImg} />
                </Col>
            </Row>
        </Container> 
    </div>
    );
}

export default FeatureAudio;