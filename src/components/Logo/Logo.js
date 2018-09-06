import React from 'react';
// webpack will handle importing the image since defining src path only works in dev mode
import burgerLogo from '../../assets/images/hamburger.png';
import css from './Logo.css'

const Logo = () => (
    <div className={css.imageContainer}>
        <img className={css.image} src={burgerLogo} alt="BurgerBuilder" />       
    </div>

);

export default Logo;