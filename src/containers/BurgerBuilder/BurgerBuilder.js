import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

// global constant, all caps
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.75,
    meat: 1.50,
    bacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 3.99,
        purchaseable: false,
        // default --> false
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response =>{
                console.log(response.data)
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })
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
        this.setState({loading: true})
        // NOTE: should calculate price on the server side to avoid manipulation
        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Tom',
                addres: {
                    street: 'teststreet',
                    zipCode: '12123',
                    country: 'Canada'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        // .json needed to select proper endpoint for firebase
        // remove .json to display error handling in HOC
        axios.post('/order.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false})
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
            })
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
        let orderSummary = null;
        let burger = this.state.error ?<p> Ingredients can't be loaded</p> :<Spinner/>
        if (this.state.ingredients){
            burger = (
                <Aux>
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
            orderSummary = <OrderSummary 
                ingredients = {this.state.ingredients}
                purchaseCanceled= {this.purchaseCancelHandler}
                purchaseContinued= {this.purchaseContinueHandler}
                totalPrice= {this.state.totalPrice}/>;            
        }
        if (this.state.loading){
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} 
                       modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
