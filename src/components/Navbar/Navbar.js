import React, { useState } from 'react';
//import logo from '../../logo.svg';
import './Navbar.css';
import {Container, Row, Col} from 'react-bootstrap';
// <img src={logo} />

const Navbar = () => {

  return (
    <Container>
            <Row>
                <br />
                <Col lg={12}>
                <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">AUXPAD</a></p>
          <p><a href="#wgpt3">Features</a></p>
          <p><a href="#possibility">Pricing</a></p>
          <p><a href="#features">Testimonials</a></p>
          <p><a href="#blog">Contact</a></p>
          <p><a href="#blog">About Us</a></p>
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign up</p>
        <button type="button">Sign in</button>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        
      </div>
    </div>
                </Col>
            </Row>
        </Container> 
    
  );
};

export default Navbar;