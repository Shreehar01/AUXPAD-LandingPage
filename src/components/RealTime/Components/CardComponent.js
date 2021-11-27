import React from 'react'
import Classes from './CardComponent.module.css';

const CardComponent = ({text}) => {
    return (
        <div className={Classes.Card}>
                <div className={Classes.Block1}>
                    <h5 className={Classes.Head}>{text[0]}</h5>
                    <p className={Classes.Para}> {text[1]} </p>
                    <button onClick = {() => {window.location.replace("https://app.auxpad.com/register", { replace: false })}} className={Classes.CardButton}>Try Now</button>
                </div>
                <div className={Classes.Block2}>
                    <h5 className={Classes.Head}>{text[2]}</h5>
                    <p className={Classes.Para}>{text[3]}</p>
                </div>
        </div>
    )
}

export default CardComponent;
