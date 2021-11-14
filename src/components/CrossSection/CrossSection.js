import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Img from './Cross Platform.svg';
import Img2 from './Additional Features Section.svg';
import Img3 from './Testimonial.svg';
import Classes from './CrossSection.module.css';

const CrossSection = () =>{
    return (
    <div> 
        <Container>
            <Row sm={12}>
                <div>
                    <img className={Classes.imageComponent1} src ={Img} />  
                </div>    
                <div className={Classes.imageComponent2}>
                    <img src ={Img2} />
                </div>
                <div className={Classes.imageComponent3}>
                    <img src ={Img3} />
                </div>
            </Row>
        </Container> 
    </div>
    );
}

export default CrossSection;