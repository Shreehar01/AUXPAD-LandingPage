import React, { useState } from 'react';
//import logo from '../../logo.svg';
import './Navbar.css';
import {Container, Row, Col} from 'react-bootstrap';
// <img src={logo} />

const Navbar = () => {
  return (
   <div>
     <div class="nav">
    <div class="nav-header">
      <div class="nav-title">
        AUXPAD
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="nav-links">
      <a href="" target="_blank">Features</a>
      <a href="" target="_blank">Pricing</a>
      <a href="" target="_blank">Testimonials</a>
      <a href="" target="_blank">Contact</a>
      <a href="" target="_blank">About Us</a>
    </div>
    <div class="sign">
        <a href="">Sign In</a>
        <button class="sign-up">Sign Up</button>
    </div>
  </div>
   </div>
  );
};

export default Navbar;