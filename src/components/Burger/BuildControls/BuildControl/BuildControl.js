import React from 'react';
import css from './BuildControl.css';

const buildControl = (props) => (
    <div className={css.BuildControl}>
        <div className={css.Label}> {props.Label} </div>
        <button className={css.Less}> Less </button>
        <button children={css.More}> More </button>
    </div>
)

export default buildControl;