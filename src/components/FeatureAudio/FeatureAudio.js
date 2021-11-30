import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import Classes from './FeatureAudio.module.css';
import Rectangle from './Rectangle.svg';
import TranscriptImage from './TranscriptImage.svg';
import RectangleBackground from './RectangleBackground.svg';
import CardComponent  from './Components/CardComponent.js';
import TempImg from './TempImg.png';

const texts = {
    "inclass" : ["Zoned out during a lecture?", "And forgot to take notes? Don’t worry, auxpad has the entire transcript + audio ready for you to review"],
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
                <div className={Classes.InternalWrapper}>
                    <div id="FeatureAudio" className={Classes.TextContainer}>
                        <h1 className={Classes.Heading}>Catch everything with audio recordings <br /> & live transcript</h1>
                        <h1 className={Classes.HeadingSmall}>Catch everything with audio recordings & live transcript</h1>                        
                        <p className={Classes.Paragraph}>AUXPAD will keep a complete recording of your live audio with <br /> real-time transcript so you don’t have to wait</p>
                        <p className={Classes.ParagraphSmall}>AUXPAD will keep a complete recording of your live audio with real-time transcript so you don’t have to wait</p>

                    </div>
                    <div className={Classes.SwitchContainer}>    
                        <img className={Classes.BgImage} src={Rectangle} />
                        <img className={Classes.RectangleBackground} src={RectangleBackground} />
                        <img className={Classes.TranscriptImage} src={value == "inclass" ? TranscriptImage : value == "meeting"? TempImg: TranscriptImage} />
                        <button className={value == "inclass" ? Classes.ButtonSelected1 : Classes.ButtonChildren1} onClick = {() => setValue("inclass")}>in class</button>
                        <button className={value == "meeting" ? Classes.ButtonSelected2 : Classes.ButtonChildren2} onClick = {() => setValue("meeting")}>meeting</button>
                        <button className={value == "interview" ? Classes.ButtonSelected3 : Classes.ButtonChildren3} onClick = {() => setValue("interview")}>interview</button>
                        <CardComponent heading={heading} paragraph={paragraph} />  
                    </div> 
                    <div className={Classes.MiniSwitchContainer}>
                        <div className= {Classes.ButtonFlex}>
                            <button className={value == "inclass" ? Classes.ButtonSelected1Sm : Classes.ButtonChildren1Sm} onClick = {() => setValue("inclass")}>in class</button>
                            <button className={value == "meeting" ? Classes.ButtonSelected2Sm : Classes.ButtonChildren2Sm} onClick = {() => setValue("meeting")}>meeting</button>
                            <button className={value == "interview" ? Classes.ButtonSelected3Sm : Classes.ButtonChildren3Sm} onClick = {() => setValue("interview")}>interview</button>
                        </div>
                        <div className={Classes.ImageCardFlex}>
                            <img className={Classes.TranscriptImageSm} src={value == "inclass" ? TranscriptImage : value == "meeting"? null: null} />
                            <div className={Classes.CardSm}> 
                                <CardComponent heading={heading} paragraph={paragraph} />
                            </div>
                        </div>    
                    </div>       
                </div>
            </Wrapper>           
    );
}

export default FeatureAudio;
