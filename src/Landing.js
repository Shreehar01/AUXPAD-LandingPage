import React from 'react';
import Hero from './components/Hero/Hero.js'
import FeatureAudio from './components/FeatureAudio/FeatureAudio.js';
import RealTime from './components/RealTime/RealTime.js';
import CrossPlatform from './components/CrossPlatform/CrossPlatform.js';
import Email from './components/Email/Email.js';
import ExtraFeature from './components/ExtraFeature/ExtraFeature.js';
import Subscription from './components/Subscription/Subscription.js';
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <Hero />
            <FeatureAudio />
            <RealTime />
            <CrossPlatform />
            <ExtraFeature />
            <Subscription />
            <Email />
        </div>
    )
}

export default Landing
