import React from 'react'
import Classes from './Wrapper.module.css';

const Wrapper2 = ({children}) => {
    return (
        <div className = {Classes.flexContainer2}>
            {children}
        </div>
    )
}

export default Wrapper2
