import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import css from './Layout.css';
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        sideDrawerDisplay: true
    }

    sideDrawerDisplayHandler = () => {
        this.setState({sideDrawerDisplay: false})
    }

    render() {
        return (
            // wrap adjacent elements in wrapping root element, Aux
            <Aux>
                <Toolbar />
                <SideDrawer 
                    open = {this.state.sideDrawerDisplay} 
                    closeSideDrawer={this.sideDrawerDisplayHandler}/>
                <main className={css.content}>
                    {this.props.children}
                </main>
            </Aux>            
        )
    }
}

export default Layout;