import React, { useState } from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <div class="universal">
        <div class="nav">
        <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
          AUXPAD
        </div>
      </div>
      <div class="nav-btn">
          <label for="nav-check">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </label>
        </div>
      <div class="nav-links">
        <a onClick = {() => {document.getElementById("FeatureAudio").scrollIntoView({behavior: 'smooth'})}}>Features</a>
        <a onClick = {() => {document.getElementById("Pricing").scrollIntoView({behavior: 'smooth'})}}>Pricing</a>
        <a onClick = {() => {document.getElementById("Pricing").scrollIntoView({behavior: 'smooth'})}}>Testimonials</a>
        <a onClick = {() => {document.getElementById("Contact").scrollIntoView({behavior: 'smooth'})}}>Contact</a>
        <a onClick = {() => {document.getElementById("Contact").scrollIntoView({behavior: 'smooth'})}}>About Us</a>
        <div>
          <a class = "no-show" href="https://app.auxpad.com/login">Sign In</a>
          <a class = "no-show" href="https://app.auxpad.com/register">Sign Up</a>
        </div>
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