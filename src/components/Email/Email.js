import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactUs from '../FeatureAudio/Email.svg'; 
import TextField from '@mui/material/TextField';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import classes from './Email.module.css';

const Email = () => {
    return (
        <div>
            <div className={classes.containerGroup}>
                <div className={classes.innerContainer}>
                    <Row>
                        <h1 className={classes.heading}>Questions? Concerns? Email us!</h1>
                    </Row>
                    <Row>
                        <p className={classes.para}>Email Charles and Andrew at app@auxpad.com and we’ll personally <br /> respond to you as quickly as possible. Or, just add yourself to the mailing <br /> list below and never miss another update!</p>
                    </Row>
                    <Row>
                        <Col>
                            <TextField
                                id="outlined-helperText"
                                label="email"
                                defaultValue=" "
                                className={classes.textBox}
                            />
                        </Col>
                        <Col>
                            <button className={classes.buttonGroup}>give us a wave 👋</button>
                        </Col>
                    </Row>
                    <br />
                </div>
                <p className={classes.outerGroup}>© AUXPAD 2021. All Rights Reserved.</p>
            </div> 
        </div>
    );
}

export default Email;
