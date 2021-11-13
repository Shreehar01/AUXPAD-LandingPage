import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HeroSection from './Hero Section.svg';

const Hero = () =>{
    return (
    <div> 
        <Container>
            <Row>
                <br />
                <Col sm={12}>
                    <img src ={HeroSection} />
                </Col>
            </Row>
        </Container> 
    </div>
    );
}

export default Hero;