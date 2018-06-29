import React, { Component } from 'react';

class Page2 extends Component{
constructor(props){
  super(props);
  this.state = {
    no1: 0,
    no2: 0,
    result: 0,
  }
}
substractNumbers = () =>{
  this.setState({result : this.state.no1 - this.state.no2});
}
  render(){

    return <div>
      <input placeholder="first number" onChange={(event)=>this.setState({no1:event.target.value})} />
      <input placeholder="second number" onChange={(event)=>this.setState({no2:event.target.value})} />
      <button onClick={this.substractNumbers}>result</button>
      <label>{this.state.result}</label>
    </div>

  }
}
export default Page2;
