import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactUs from '../FeatureAudio/Email.svg'; 
import TextField from '@mui/material/TextField';
import Wrapper2 from '../Wrapper/Wrapper2';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import classes from './Email.module.css';

const Email = () => {
    return (
        <Wrapper2>
            <div className={classes.containerGroup}>
                <div className={classes.innerContainer}>
                        <h1 className={classes.heading}>Questions? Concerns? Email us!</h1>
                        <p className={classes.para}>Email Charles and Andrew at app@auxpad.com and we’ll personally <br /> respond to you as quickly as possible. Or, just add yourself to the mailing <br /> list below and never miss another update!</p>
                            <TextField
                                id="outlined-helperText"
                                label="email"
                                defaultValue=" "
                                className={classes.textBox}
                            />
                            <button className={classes.buttonGroup}>give us a wave 👋</button>
                            <p className={classes.outerGroup}>© AUXPAD 2021. All Rights Reserved.</p>
                </div>
                
            </div> 
        </Wrapper2>
    );
}

export default Email;
