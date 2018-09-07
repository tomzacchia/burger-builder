import React from 'react';
import css  from './BuildControls.css'

import BuildControl  from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' } 
];

const buildControls = (props) => {
    return (
        <div className={css.BuildControls}>
            <p> Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl 
                            key={control.label} 
                            Label={control.label}
                            added = {() => props.ingredientAdded(control.type)}
                            removed = {() => props.ingredientRemoved(control.type)}
                            disabled = { props.disabled[control.type] }
                        />
            })}
            <button 
                className={css.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}>
                    order now
            </button>
        </div>
    );
};

export default buildControls;