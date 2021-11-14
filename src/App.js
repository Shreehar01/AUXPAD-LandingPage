import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import FeatureAudio from './components/FeatureAudio/FeatureAudio.js';
import FeatureClick from './components/FeatureClick/FeatureClick.js';
import CrossSection from './components/CrossSection/CrossSection.js';
import Email from './components/Email/Email.js';
import classes from './App.module.css';

const App = () => {
    return( 
    <div className={classes.prim}> 
        <Navbar /> 
        <Hero />
        <FeatureAudio />
        <FeatureClick />
        <CrossSection />
        <Email />
    </div>
    );
};

export default App;
