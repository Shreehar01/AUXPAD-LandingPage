import React from 'react';

//import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
//import { CTA, Brand, Navbar } from './components';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import FeatureAudio from './components/FeatureAudio/FeatureAudio.js';
import FeatureClick from './components/FeatureClick/FeatureClick.js';
import CrossSection from './components/CrossSection/CrossSection.js';
import Email from './components/Email/Email.js';

//import './App.css';

const App = () => {
//   <div className="App">
//     <div className="gradient__bg">
//       <Navbar />
//       <Header />
//     </div>
//     <Brand />
//     <WhatGPT3 />
//     <Features />
//     <Possibility />
//     <CTA />
//     <Blog />
//     <Footer />
//   </div>
    return( 
    <div> 
        <Navbar /> 
        <br />
        <br />
        <br />
        <Hero />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FeatureAudio />
        <FeatureClick />
        <CrossSection />
        <Email />
    </div>
    );
};

export default App;
