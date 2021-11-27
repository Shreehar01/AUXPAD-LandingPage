import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import HeroImage from './HeroImage.svg';
import Classes from './Hero.module.css';

const Hero = () =>{
    return (
        <Wrapper>
            <div className={Classes.FlexContainer}>
                <div className={Classes.Text}>
                    <h1 className={Classes.Heading}>Never miss <br /> another <br /> sentence.</h1>
                    <h1 className={Classes.HeadingSmall}>Never miss another sentence.</h1>
                    <p className={Classes.Paragraph}>AUXPAD combines a beautiful editor with <br /> speech-to-text recognition for a seamless <br /> note-taking experience.</p>
                    <p className={Classes.ParagraphSmall}>AUXPAD combines a beautiful editor with speech-to-text recognition for a seamless note-taking experience.</p> 
                    <button onClick = {() => {window.location.replace("https://app.auxpad.com/register", { replace: true })}} className={Classes.Button}>Start Now</button>
                </div>
                <div className = {Classes.Image}><img src={HeroImage} /></div>
            </div>        
        </Wrapper> 
    );
}

export default Hero;