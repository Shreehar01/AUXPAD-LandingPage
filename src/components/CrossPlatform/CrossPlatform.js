import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import Classes from './CrossPlatform.module.css';
import CrossSection from './Devices Frame.jpg';

const CrossPlatform = () =>{
    return (
        <Wrapper>
            <div className = {Classes.InternalWrapper}>
                <div id="CrossPlatform" className={Classes.TextContainer}>
                    <h1 className={Classes.Heading}>Fully cross-platform, <br /> available wherever you are</h1>
                    <h1 className={Classes.HeadingSmall}>Fully cross-platform, available wherever you are</h1>                        
                    <p className={Classes.Paragraph}>Review your notes anywhere — at the desk or on the go</p>
                    <p className={Classes.ParagraphSmall}>Review your notes anywhere — at the desk or on the go</p>
                </div>  
                <div className={Classes.ImgContainer}>
                    <img className={Classes.Img} src = {CrossSection} />
                </div>
            </div>
        </Wrapper>           
    );
}

export default CrossPlatform;
/*
<div className={Classes.SwitchContainer}>    
                    <img className={Classes.BgImage} src={Rectangle} />
                    <img className={Classes.RectangleBackground} src={RectangleBackground} />
                    <img className={Classes.TranscriptImage} src={value == "inclass" ? TranscriptImage : value == "meeting"? null: null} />
                    <button className={value == "inclass" ? Classes.ButtonSelected1 : Classes.ButtonChildren1} onClick = {() => setValue("inclass")}>in class</button>
                    <button className={value == "meeting" ? Classes.ButtonSelected2 : Classes.ButtonChildren2} onClick = {() => setValue("meeting")}>meeting</button>
                    <button className={value == "interview" ? Classes.ButtonSelected3 : Classes.ButtonChildren3} onClick = {() => setValue("interview")}>interview</button>
                    <CardComponent heading={heading} paragraph={paragraph} /> 
                    
                </div>
*/