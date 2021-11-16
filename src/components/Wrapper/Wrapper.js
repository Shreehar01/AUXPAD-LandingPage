import React from 'react'
import { Container } from 'react-bootstrap';
import Classes from './Wrapper.module.css';

const Wrapper = ({children}) => {
    return (
        <div className = {Classes.flexContainer}>
            {children}
        </div>
    )
}

export default Wrapper
