import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  // HOC interceptor removal test
/*   state = {
    showBurger: true
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({showBurger: false})
    },5000)
  } */

  render() {
    return (
      <div>
        <Layout>
           {/* {this.state.showBurger? <BurgerBuilder /> : null} */}
           <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
