import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Img from './Cross Platform.svg';
import Img2 from './Additional Features Section.svg';
import Img3 from './Testimonial.svg';

const CrossSection = () =>{
    return (
    <div> 
        <Container>
            <Row>
                <br />
                <Col sm={12}>
                    <img src ={Img} />
                    <img src ={Img2} />
                    <img src ={Img3} />
                </Col>
            </Row>
        </Container> 
    </div>
    );
}

export default CrossSection;