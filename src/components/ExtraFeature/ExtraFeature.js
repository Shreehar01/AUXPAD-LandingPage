import React from 'react'
import Wrapper from '../Wrapper/Wrapper.js';
import Classes from './ExtraFeature.module.css';
import MarkdownImage from './Markdown Screen.jpg';
import Frame from './Frame.jpg';

const ExtraFeature = () => {
    const languages = ['Czech', 'Danish', 'English', 'Finnish', 'French', 'German', 'Indonesian', 'Italian', 'Mandarin', 'Spanish', 'Swedish'];
    return (
        <Wrapper>
            <div className={Classes.InternalWrapper}>
                <div id="ExtraFeature" className={Classes.TextContainer}>
                    <h1 className={Classes.Heading}>Need a feature? We got it.</h1>
                </div>     
                <div className={Classes.CardContainer}>
                    <div className={Classes.Flex1} >
                        <div className={Classes.FCard1}>
                            <h5 className={Classes.TextHeading}>Zoom Compatible</h5>
                            <p className={Classes.TextPara}>Start transcribing with the <br /> quintessential meeting app.</p>
                        </div>
                        <div className={Classes.FCard2}>
                            <h5 className={Classes.TextHeading}>Multi-language Support</h5>
                            <p className={Classes.TextPara}>We currently support 10+ <br /> languages, as well as 4 english <br /> variants</p>
                            <ul className={Classes.TextPara}>
                                {languages.map((language)=>{
                                    return <li className={Classes.TextPara}>{language}</li>;
                                })}
                            </ul> 
                        </div>
                    </div>
                    <div className={Classes.Flex2}>
                        <div className={Classes.SCard1}>
                            <h5 className={Classes.TextHeading}>Markdown Ready</h5>
                            <p className={Classes.TextPara}>Headers, bolds, codes and quotes, we got them all.</p>
                            <img className={Classes.ImgHeader} src={MarkdownImage} />
                        </div>
                        <div className={Classes.SCard2}>
                            <div className={Classes.FlexLastText}>
                                <h5 className={Classes.TextHeading}>Audiofile Upload</h5>
                                <p className={Classes.TextPara}>Take notes on lectures with <br /> ease, no need to jot down all <br /> the paraphrase when you can <br /> click to paste</p>
                            </div>
                            <div ClassName={Classes.FlexLastImage}><img src={Frame} /></div>
                        </div>
                    </div>
                </div>
            </div>   
        </Wrapper>
    )
}

export default ExtraFeature
