import React, { Component } from 'react';

class Page1 extends Component{
  constructor(props){
    super();
    this.state = {
      result_add : 0
    }

  }
  //console.log(this.props.numbers.number1);
  //this.setState({result : parseInt(this.state.number1) + parseInt(this.state.number2) });
  //this.setState({result : (this.props.numbers.number1 + this.props.numbers.number2)});
  //const result = parseInt(this.props.numbers.number1) + parseInt(this.props.numbers.number2);
  addNumbers = () =>{
    this.setState({result_add : (parseInt(this.props.numbers.number1) + parseInt(this.props.numbers.number2))});
  }
  render(){
    return <div>
              <button onClick={this.addNumbers}>result</button>
              <h2>{this.state.result_add}</h2>
           </div>
  }
}

export default Page1;
