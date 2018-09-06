import React from 'react';
import css from './NavLinks.css';

const navLinks = () => (
    <ul className={css.navLinks}>
        <li className={css.navLink}><a href="/"> Builder </a></li>
        <li className={css.navLink}><a href="/"> Purchase </a></li>
    </ul>
);

export default navLinks;