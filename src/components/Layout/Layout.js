import React from 'react';
import Aux from '../../hoc/Aux';
import css from './Layout.css';

const layout = (props) =>(
    // wrap adjacent elements in wrapping root element, Aux
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop [placeholder]</div>
        <main className={css.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;