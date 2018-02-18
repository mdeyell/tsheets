import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";


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
      <fieldset className="awesome">
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
    this.socket = io('http://192.168.0.4:8080'); //change to localhost:8080 if lan connections are not desired
    this.socket.emit('getMyHours', {
  });
    this.state={_this:this};
    this.state ={monday:"",tuesday:"",wednesday:"",thursday:"",friday:"",saturday:"",sunday:""}
    this.socket.on('hours', function(hours){
        updateHours(hours);   
    });
    const updateHours = hours => {
      //console.log(hours);
      for(var day in hours){
        var hoursWorked = {}
        hoursWorked[day]=hours[day];
        this.setState(hoursWorked);
      }
      console.log("after constructor state is: " + JSON.stringify(this.state));
    };
  }

  onHourChange(day,hour,_this) {
    console.log("day is: "+ day + ", hour is: " + hour);
    var hourChange  = {};
    hourChange[day]=hour;
    if(hour >= 0 && hour<=24){ 
     _this.setState(hourChange);
    }else{
      hourChange[day]=8;
      _this.setState(hourChange);
      alert("Invalid hours entered on " + day);
      return;
    }

    _this.socket.emit('hoursChange',{
           hourChange  
    });
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
