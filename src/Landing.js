import React from 'react';
import Hero from './components/Hero/Hero.js'
import FeatureAudio from './components/FeatureAudio/FeatureAudio.js';
import Email from './components/Email/Email.js';
import Classes from "./Landing.module.css";
const Landing = () => {
    return (
        <div>
            <Hero />
            <FeatureAudio />
        </div>
    )
}

export default Landing
