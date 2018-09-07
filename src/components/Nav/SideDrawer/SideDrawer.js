import React from 'react';
import Logo from '../../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import css from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [css.SideDrawer, css.Close];
    if (props.open){
        attachedClasses = [css.SideDrawer, css.Open];
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closeSideDrawer}/>
            <div className= {attachedClasses.join(' ')}>
                <div className={css.closeButton}>
                    <i className="material-icons" onClick={props.closeSideDrawer}> close </i>
                </div>
                <div className={css.logoContainer}>
                    <Logo/>            
                </div>

                <nav>
                    <NavLinks />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;