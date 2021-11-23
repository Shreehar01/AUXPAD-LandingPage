import React from 'react'
import Classes from './CardComponent.module.css';

const CardComponent = ({heading, paragraph}) => {
    return (
        <div className={Classes.Card}>
            <div className={Classes.SubCard}>
                <h6 className={Classes.CardHeading}>{heading}</h6>
                <p className={Classes.CardParagraph}>{paragraph}</p>
                <button onClick = {() => {window.location.replace("https://app.auxpad.com/register", { replace: false })}} className={Classes.CardButton}>Try Now</button>
            </div> 
        </div>
    )
}

export default CardComponent
