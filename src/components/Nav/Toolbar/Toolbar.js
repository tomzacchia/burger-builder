import React from 'react';
import css from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavLinks  from '../NavLinks/NavLinks';

const toolbar = (props) => (
    <header className = {css.Toolbar}>
        <div onClick={props.sideDrawerToggle} className={css.Hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo />
        <nav className = {css.desktopNav}>
            <NavLinks />            
        </nav>
    </header>
);

export default toolbar;