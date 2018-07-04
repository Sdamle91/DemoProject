import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page1 from './page1.js';
import Page2 from './page2.js';
import DateComponent from './DateComponent.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    numbers:{
      number1 : 0,
      number2 : 0,
    },

    }
  }

handleNumberOneChg = (event) =>{
  let tempNumObj = {};
  tempNumObj.number1 = event.target.value;
  tempNumObj.number2 = this.state.numbers.number2;
  this.setState({numbers: tempNumObj});
}

handleNumberSecondChg = (event) =>{
  let tempNumObj = {};
  tempNumObj.number1 = this.state.numbers.number1;
  tempNumObj.number2 = event.target.value;
  this.setState({numbers: tempNumObj});
}

  render() {
    return (
      <Router>
          <div>
            <input placeholder="first number" onChange={this.handleNumberOneChg}/>
            <input placeholder="second number" onChange={this.handleNumberSecondChg}/>
             <ul>
                <li><Link to={'/Page1'}>Addition of numbers</Link></li>
                <li><Link to={'/Page2'}>Substraction of numbers</Link></li>
                <li><Link to={'/DateComponent'}>Date</Link></li>
             </ul>
             <hr />

             <Switch>
                <Route exact path='/Page1' render={()=>{return <Page1 numbers={this.state.numbers} /> }} />
                <Route exact path='/Page2' component={Page2} />
                <Route exact path='/DateComponent' component={DateComponent} />
             </Switch>
          </div>
       </Router>
    );
  }
}

export default App;
