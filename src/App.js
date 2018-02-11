import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class DayOfWeek extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onHourChange(this.props.day,e.target.value,this.props._this);
  }
  render() {
    const day = this.props.day;
    return (
      <fieldset>
        <div>Hours on {day}</div>
        <input value={this.props.hours}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={monday:0,tuesday:0,wednesday:0,thursday:0,friday:0,saturday:0,sunday:0}
  }

  onHourChange(day,hour,_this) {
    var obj  = {};
    obj[day]=hour;
    console.log("day is: "+ day + ", hour is: " + hour);
    _this.setState(obj);
  }

  render() {

    return (
      <div>Enter numbers of hours worked on each day</div>,
      <div> 
       <DayOfWeek
         day="monday" 
         hours= {this.state.monday}
         onHourChange={this.onHourChange}
         _this={this}
         />
        <DayOfWeek
         day="tuesday" 
         hours= {this.state.tuesday}
         onHourChange={this.onHourChange}
         _this={this}
         />
        <DayOfWeek
         day="wednesday" 
         hours= {this.state.wednesday}
         onHourChange={this.onHourChange}
         _this={this}
         />
        <DayOfWeek
         day="thursday" 
         hours= {this.state.thursday}
         onHourChange={this.onHourChange}
         _this={this}
         />
        <DayOfWeek
         day="friday" 
         hours= {this.state.friday}
         onHourChange={this.onHourChange}
         _this={this}
         />
        <DayOfWeek
         day="saturday" 
         hours= {this.state.saturday}
         onHourChange={this.onHourChange}
         _this={this}
         />
        <DayOfWeek
         day="sunday" 
         hours= {this.state.sunday}
         onHourChange={this.onHourChange}
         _this={this}
         />



       </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <Calendar/>
     // <Calculator/>

    );
  }
}

export default App;
