import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import Classes from './FeatureAudio.module.css';
import Rectangle from './Rectangle.svg';
import TranscriptImage from './TranscriptImage.svg';
import RectangleBackground from './RectangleBackground.svg';
import CardComponent  from './Components/CardComponent.js';

const texts = {
    "inclass" : ["InClass Heading", "InClass Paragraph"],
    "meeting" : ["Metting Heading", "Meeting Paragraph"],
    "interview" : ["Interview Heading", "Interview Paragraph"]
}

const FeatureAudio = () =>{
    const [value, setValue] = useState("inclass");
    const [heading, setHeading] = useState(texts.inclass[0]);
    const [paragraph, setParagraph] = useState(texts.inclass[1]);

    React.useEffect(()=>{
       if (value == "inclass"){
           setHeading(texts.inclass[0]);
           setParagraph(texts.inclass[1]);
       } else if(value == "meeting"){
           setHeading(texts.meeting[0]);
           setParagraph(texts.meeting[1]);
       } else{
           setHeading(texts.interview[0]);
           setParagraph(texts.interview[1]);
       }
    }, [value])

    return (
            <Wrapper>
                <div id="FeatureAudio" className={Classes.TextContainer}>
                    <h1 className={Classes.Heading}>Catch everything with audio recordings <br /> & live transcript</h1>
                    <p className={Classes.Paragraph}>AUXPAD will keep a complete recording of your live audio with <br /> real-time transcript so you don’t have to wait</p>
                </div>
                <div className={Classes.SwitchContainer}>    
                    <img className={Classes.BgImage} src={Rectangle} />
                    <img className={Classes.RectangleBackground} src={RectangleBackground} />
                    <img className={Classes.TranscriptImage} src={value == "inclass" ? TranscriptImage : value == "meeting"? null: null} />
                    <div className={Classes.ButtonClass}>
                        <button className={value == "inclass" ? Classes.ButtonSelected : Classes.ButtonChildren} onClick = {() => setValue("inclass")}>in class</button>
                        <button className={value == "meeting" ? Classes.ButtonSelected : Classes.ButtonChildren} onClick = {() => setValue("meeting")}>meeting</button>
                        <button className={value == "interview" ? Classes.ButtonSelected : Classes.ButtonChildren} onClick = {() => setValue("interview")}>interview</button>
                    </div>
                    <CardComponent heading={heading} paragraph={paragraph} /> 
                </div>    
            </Wrapper>           
    );
}

export default FeatureAudio;