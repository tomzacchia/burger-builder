import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// global constant, all caps
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.75,
    meat: 1.50,
    bacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3.99,
        purchaseable: false,
        purchasing: false,
    }

    // toggles disabling of ORDER NOW button
    updatedPurchaseState (ingredients) {
        const ingredient = {...ingredients};
        // array of the key values
        const ingredientSum = Object.keys(ingredient)
            .map( ingredientKey => {
                return ingredient[ingredientKey];
            })
            .reduce((currentSum,element) => {
                return currentSum + element;
            },0)
        this.setState({purchaseable: ingredientSum > 0 })
    }

    // toggling Modal display
    //  FOR EVENTS THAT INVOKE FUNCTIONS, THIS NOT DOES REFER TO THE OBJECT with normal notation
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert('You Continue');
    }
    // updates current quantity of ingredient selected and totalPrice
    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] += 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatedPurchaseState(updatedIngredients);
    }
    // updates current quantity of ingredient selected and totalPrice
    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0 ){
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] += -1;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatedPurchaseState(updatedIngredients);            
        } else {
            return;
        }
    }
    render(){
        // this constant will be passed as a prop to control disabling of Less button
        const disabledInfo = {
            ...this.state.ingredients
        }
        // key: boolean in disabledInfo object
        for(let key in disabledInfo){
            disabledInfo[key] = (disabledInfo[key] <= 0);
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        purchaseCanceled= {this.purchaseCancelHandler}
                        purchaseContinued= {this.purchaseContinueHandler}
                        totalPrice= {this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}
                    purchaseable = {this.state.purchaseable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;

// salad: 1,
// bacon: 1,
// cheese: 2,
// meat: 2