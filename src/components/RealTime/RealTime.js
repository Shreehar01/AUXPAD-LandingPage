import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import Classes from './RealTime.module.css';
import Rectangle from './Rectangle.svg';
import TranscriptImage from './Transcript.svg';
import CardComponent  from './Components/CardComponent.js';
import Ellipse from './Ellipse.svg';
import Vector from './Vector.svg';

const texts = {
    "inclass" : ["Less Typing, More Learning ", "Take notes on lectures with ease, no need to jot down all the paraphrase when you can click to paste", "Less Typing, More Talking", "Brainstorm away in meetings. With simple clicks, ideas will fall onto your note page."],
    "meeting" : ["Metting Heading", "Meeting Paragraph", "Metting Heading", "Meeting Paragraph"],
    "interview" : ["Interview Heading", "Interview Paragraph", "Interview Heading", "Interview Paragraph"]
}

const RealTime = () =>{
    const [value, setValue] = useState("inclass");
    const [text, setText] = useState(texts.inclass);
    
    React.useEffect(()=>{
       if (value == "inclass"){
          setText(texts.inclass)
       } else if(value == "meeting"){
           setText(texts.meeting)
       } else{
           setText(texts.interview)
       }
    }, [value])

    return (
            <Wrapper>
                <div className={Classes.InternalWrapper}>
                    <div className={Classes.Logo}>
                        <img className = {Classes.Ellipse} src = {Ellipse} />
                        <img className = {Classes.Vector} src = {Vector} />
                     </div>   
                    <div id="RealTime" className={Classes.TextContainer}>
                        <h1 className={Classes.Heading}>Click and insert in real-time</h1>
                        <p className={Classes.Paragraph}>Click and insert the auto-separated transcript phrases to speed up your note-taking </p>
                    </div>
                    <div className={Classes.SwitchContainer}>    
                        <img className={Classes.BgImage} src={Rectangle} />
                        <img className={Classes.TranscriptImage} src={value == "inclass" ? TranscriptImage : value == "meeting"? null: null} />
                        <button className={value == "inclass" ? Classes.ButtonSelected1 : Classes.ButtonChildren1} onClick = {() => setValue("inclass")}>in class</button>
                        <button className={value == "meeting" ? Classes.ButtonSelected2 : Classes.ButtonChildren2} onClick = {() => setValue("meeting")}>meeting</button>
                        <button className={value == "interview" ? Classes.ButtonSelected3 : Classes.ButtonChildren3} onClick = {() => setValue("interview")}>interview</button>
                        <CardComponent text={text} />  
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
                                <CardComponent text={text} />  
                            </div>
                        </div>    
                    </div>       
                </div>
            </Wrapper>           
    );
}

export default RealTime;
