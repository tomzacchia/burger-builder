import React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient' 

const burger = (props) => {
    // transforming object to array
    // Object.keys return an array that only contains the keys of props, i.e 'salad'
    // Array(n) returns empty array of size n
    let ingredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_,i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            })
        })
        .reduce((arr, el)=> {
            // flatening array via concat, merging
            return arr.concat(el);
        }, []);
    if (ingredients.length === 0){
        ingredients = <p> Please start adding ingredients! </p>
    }
    console.log(ingredients);
    return (
        <div className={css.burger}>
            <BurgerIngredient type="breadTop"/>
            {ingredients}
            <BurgerIngredient type="breadBottom"/>
        </div>
    );
};

export default burger;