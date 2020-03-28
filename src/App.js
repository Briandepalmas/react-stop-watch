import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  constructor(props){
    super(props);

    this.state={
                seconds: 0,
                minutes: 0,
                pause: false
    }
    this.timer=this.timer.bind(this)
    this.handleStartClick=this.handleStartClick.bind(this)
    this.handlePauseClick=this.handlePauseClick.bind(this)
    this.handleResetClick=this.handleResetClick.bind(this)
    
  }

  handleStartClick(){
    //setInterval calls the timer function every second.
    this.startTimer=setInterval(this.timer,1000)
      
  }
  
  timer(){
    if (this.state.pause==false){
        this.setState({seconds: this.state.seconds + 1})
      }   
  }
 
 
   
  handlePauseClick(){
    //switches the pause boolean between true and false onclick
    this.setState(pauseSwitch => ({pause: !pauseSwitch.pause}));
   
  if (this.state.pause==true){
      clearInterval(this.startTimer)
      }
      else {
        this.startTimer=setInterval(this.timer,1000)
      }
  
  }
  
  
  
  handleResetClick(){
    this.setState({seconds: 0});
    clearInterval(this.timer);
  }



  render() {
    return (
      <div>
        <h1>{this.state.seconds}</h1>
        <button onClick={this.handleStartClick}>Start</button>
        <button onClick={this.handlePauseClick}>Pause</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    )
  }
}

export default App

