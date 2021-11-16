import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div class="nav">
   <div class="nav-header">
     <div class="nav-title">
       AUXPAD
     </div>
   </div>
   
   <div class="nav-links">
     <a onClick = {() => {document.getElementById("FeatureAudio").scrollIntoView({behavior: 'smooth'})}}>Features</a>
     <a >Pricing</a>
     <a >Testimonials</a>
     <a >Contact</a>
     <a >About Us</a>
   </div>
   <div class="sign">
       <a href="https://app.auxpad.com/login">Sign In</a>
       <button onClick = {() => {window.location.replace("https://app.auxpad.com/register", { replace: true })}} class="sign-up">Sign Up </button>
   </div>
 </div>
  </div>
  );
};

export default NavBar;

/*

*/