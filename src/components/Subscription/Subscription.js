import React from 'react'
import Wrapper from '../Wrapper/Wrapper.js';
import Classes from './Subscription.module.css';
import Quote from './quote.jpg';

const Subscription = () => {
    return (
        <Wrapper>
            <div className={Classes.InternalWrapper}>
                <div id="Pricing" className={Classes.TextContainer}>
                    <h1 className={Classes.Heading}>Subscription? No, it’s free!</h1>
                    <p className={Classes.Paragraph}>What's the fun in making an app if you can't share it with the world? <br /> We want everyone to get a taste of AUXPAD. We'll add additional pro <br /> features down the line to keep our devs paid, but for now, it’s <br />  completely free.</p>
                    <p className={Classes.ParagraphSm}>What's the fun in making an app if you can't share it with the world? We want everyone to get a taste of AUXPAD. We'll add additional pro features down the line to keep our devs paid, but for now, it’s completely free.</p>
                </div> 
                <div className={Classes.ReviewContainer}>
                    <div className={Classes.Review1}>
                        <img src={Quote} className={Classes.Icon} />
                        <p className={Classes.Review1Text}>AUXPAD is exactly what I’ve needed for the longest time! Once you’ve taken notes with AUXPAD, you can’t go back!</p>
                        <hr />
                        <p className={Classes.Review1Name}>David Munechika</p>
                        <p className={Classes.Review1College}>Student at Georgica Tech</p>
                    </div>
                    <div className={Classes.Review2}>
                        <img src={Quote} className={Classes.Icon2} />
                        <p className={Classes.Review2Text}>AUXPAD is exactly what I’ve needed for the longest time! Once you’ve taken notes with AUXPAD, you can’t go back!</p>
                        <hr className={Classes.Horizontal} />
                        <p className={Classes.Review2Name}>David Munechika</p>
                        <p className={Classes.Review2College}>Student at Georgica Tech</p>
                    </div>
                    <div className={Classes.Review1}>
                        <img src={Quote} className={Classes.Icon} />
                        <p className={Classes.Review1Text}>AUXPAD is exactly what I’ve needed for the longest time! Once you’ve taken notes with AUXPAD, you can’t go back!</p>
                        <hr />
                        <p className={Classes.Review1Name}>David Munechika</p>
                        <p className={Classes.Review1College}>Student at Georgica Tech</p>
                    </div>
                    <div className={Classes.Review2}>
                        <img src={Quote} className={Classes.Icon2} />
                        <p className={Classes.Review2Text}>AUXPAD is exactly what I’ve needed for the longest time! Once you’ve taken notes with AUXPAD, you can’t go back!</p>
                        <hr className={Classes.Horizontal} />
                        <p className={Classes.Review2Name}>David Munechika</p>
                        <p className={Classes.Review2College}>Student at Georgica Tech</p>
                    </div>
                </div>  
            </div>  
        </Wrapper>
    )
}

export default Subscription
//<div className={Classes.Review3}>Review3</div>