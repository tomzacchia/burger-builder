import React from 'react';
import css from './BuildControl.css';

const buildControl = (props) => (
    <div className={css.BuildControl}>
        <div className={css.Label}> {props.Label} </div>
        <button 
            className={css.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>
                Less
        </button>
        <button 
            className={css.More} 
            onClick={props.added}>
                More 
        </button>
    </div>
)

export default buildControl;