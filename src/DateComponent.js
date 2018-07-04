import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';


class DateComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            startDate:"",
            endDate:"",

        }
    }
    changeDateStart = (date) =>{
      //console.log(date.format());
      this.setState({startDate : date});

    }
    changeDateEnd = (date) =>{

      //console.log(date.format());
      //this.setState({endDate : date.format()});
      this.setState({endDate : date});
    }
    getDateDiff = ()=>{
      // console.log();
      // console.log(this.state.endDate);
      // const now = moment(this.state.startDate);
      // const expiration = moment(this.state.endDate);
      //
      // //get the difference between the moments
      // const diff = expiration.diff(now);
      //
      // //express as a duration
      // const diffDuration = moment.duration(diff);
      //
      // // display
      // console.log(diffDuration.days());
      let start = this.state.startDate;
      let end = this.state.endDate;
      console.log(moment.duration(end.diff(start)).days());
    }

  render(){
    return <div>
    <h4>Start Date</h4>
    <DatePicker onChange={(event) => this.changeDateStart(event)}/>
    <h4>End Date</h4>
    <DatePicker onChange={(event) => this.changeDateEnd(event)}/>
    <button onClick={this.getDateDiff}>Get Difference</button>
    </div>
  }
}
export default DateComponent;
