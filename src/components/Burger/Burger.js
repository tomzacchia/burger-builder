import React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient' 

const burger = (props) => {
    return (
        <div className={css.burger}>
            <BurgerIngredient type="breadTop"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="breadBottom"/>
        </div>
    );
};

export default burger;