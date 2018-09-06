import React from 'react';
import css from './Button.css';

const button = (props) => (
    // btnType passed from outside
    <button 
        className={[css.Button, css[props.btnType]].join(' ')} 
        onClick={props.clicked}> 
            {props.children} 
    </button>
)

export default button;