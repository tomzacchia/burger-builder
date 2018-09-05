import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) =>(
    // wrap adjacent elements in wrapping root element, Aux
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop [placeholder]</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;