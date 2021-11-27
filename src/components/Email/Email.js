import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactUs from '../FeatureAudio/Email.svg'; 
import TextField from '@mui/material/TextField';
import Wrapper2 from '../Wrapper/Wrapper2';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Classes from './Email.module.css';

const Email = () => {
    return (
        <Wrapper2>
            <div id="Contact" className={Classes.containerGroup}>
                <div className={Classes.innerContainer}>
                        <h1 className={Classes.heading}>Questions? Concerns? Email us!</h1>
                        <p className={Classes.para}>Email Charles and Andrew at app@auxpad.com and we’ll personally <br /> respond to you as quickly as possible. Or, just add yourself to the mailing <br /> list below and never miss another update!</p>
                        <p className={Classes.parasm}> Email Charles and Andrew at app@auxpad.com and we’ll personally respond to you as quickly as possible. Or, just add yourself to the mailing list below and never miss another update! </p>  
                            <TextField
                                id="outlined-helperText"
                                label="email"
                                defaultValue=" "
                                className={Classes.textBox}
                            />
                            <button className={Classes.buttonGroup}>give us a wave 👋</button>
                            <p className={Classes.outerGroup}>© AUXPAD 2021. All Rights Reserved.</p>
                </div>
                
            </div> 
        </Wrapper2>
    );
}

export default Email;
