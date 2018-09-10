import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'

// we pass the instance of axios to make use of the error thrown
// this HOC can be used for a variety of components that make AJAX request and handle their errors
const withErrorHandler = (WrappedComponent, axios) => {
    // anonymous stateful component
    return class extends Component {
        state = {
            error: null
        }

        // componentDidMount is only called after all child componentDidMount lifecycles are called
        // therefore these interceptors are not available at app start up, therefore componentWillMount
        // can be used to catch errors during initial rendering of app
        componentWillMount(){
            // registering interceptors and defining properties on the fly
            this.reqInterceptor = axios.interceptors.request.use(req =>{
                // clear error when sending request
                this.setState({error: null})
                return req; // return req for it to continue
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
                console.log(error)
                this.setState({error: error})
            })
        }

        // if the anonynmous component is unmounted, we want to remove reference to interceptors
        // to prevet data leak, since every other component will register interceptors for their
        // own response and error handling
        componentWillUnmount (){
            // console.log('Will uncmount', this.reqInterceptor, this.resInterceptor)
            // .eject accepts a reference of the interceptors
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {/* Firebase provides us with an error message, content is null if error is null */}
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props} />    
                </Aux>
            )            
        }
    }

}

export default withErrorHandler;