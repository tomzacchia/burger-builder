import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import css from './Layout.css';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';
import SideDrawer from '../../components/Nav/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        sideDrawerDisplay: false
    }

    // toggles display
    sideDrawerDisplayHandler = () => {
        // setState passed previous state by default, safe access to previous state
        this.setState((prevState) => {
            return {sideDrawerDisplay: !prevState.sideDrawerDisplay};
        })
    }

    render() {
        return (
            // wrap adjacent elements in wrapping root element, Aux
            <Aux>
                <Toolbar sideDrawerToggle={this.sideDrawerDisplayHandler} />
                <SideDrawer 
                    open = {this.state.sideDrawerDisplay} 
                    closeSideDrawer={this.sideDrawerDisplayHandler}/>
                {/* Burger Builder */}
                <main className={css.content}>
                    {this.props.children}
                </main>
            </Aux>            
        )
    }
}


export default Layout;