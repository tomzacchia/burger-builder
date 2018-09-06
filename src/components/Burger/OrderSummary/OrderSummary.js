import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map( ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform:'capitalize'}}>{ingredientKey}</span>: 
                    {props.ingredients[ingredientKey]}
                </li>)
        })
    
    return (
        <Aux>
            <h3> Your Order </h3>
            <p> Your delicious burger has the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p> Total Price: {props.totalPrice.toFixed(2)} </p>
            <p> Continue to checkout? </p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}> CANCEL </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}> CONTINUE </Button>
        </Aux>
    );

};

export default orderSummary;