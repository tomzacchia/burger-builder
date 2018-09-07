import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    // for debugging purposes, to find out when it updates
    componentWillUpdate(){
        console.log('[Order Summary] will updates')
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map( ingredientKey => {
                return (
                    <li key={ingredientKey}>
                        <span style={{textTransform:'capitalize'}}>{ingredientKey}</span>: 
                        {this.props.ingredients[ingredientKey]}
                    </li>)
            })
        return(
            <Aux>
                <h3> Your Order </h3>
                <p> Your delicious burger has the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p> Total Price: {this.props.totalPrice.toFixed(2)} </p>
                <p> Continue to checkout? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}> CANCEL </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE </Button>
            </Aux>            
        )
    }
}

export default OrderSummary;