import React, { Component } from 'react';
import css from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

// pureComponent would check all the props
class Modal extends Component {
    // here Modal wraps the orderSummary, therefore orderSummary will not update unless it needs to 
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }
    componentWillUpdate(){
        console.log('[Modal] will update')
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div 
                    className={css.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>        
            </Aux>
        );
    }
}

export default Modal;