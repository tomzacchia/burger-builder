import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 3.99
    }

    addIngredientHandler = (type) => {
        // update quantity of the ingredient designated by type
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] += 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0 ){
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] += -1;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});            
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
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded= {this.addIngredientHandler}
                    ingredientRemoved= {this.removeIngredientHandler}
                    disabled= {disabledInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;

// salad: 1,
// bacon: 1,
// cheese: 2,
// meat: 2