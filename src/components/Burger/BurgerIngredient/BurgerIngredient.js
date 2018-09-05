import React, {Component} from 'react';
import PropTypes from 'prop-types';
import css from './BurgerIngredient.css'

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;
        // handling different ingredients passed via props
        switch(this.props.type) {
            case ('breadBottom'):
                ingredient = <div className={css.BreadBottom}> </div>;
                break;
            case ('breadTop'):
                ingredient = (
                    <div className={css.BreadTop}>
                        <div className={css.Seeds1}> </div>
                        <div className={css.Seeds2}> </div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={css.Meat}> </div>
                break;
            case ('cheese'):
                ingredient = <div className={css.Cheese}> </div>
                break;
            case ('salad'):
                ingredient = <div className={css.Salad}> </div>
                break;
            case ('bacon'): 
                ingredient = <div className={css.Bacon}> </div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

// Prop type validation
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;