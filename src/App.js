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
  }

  handleStartClick(){
    //setInterval calls the timer function every second.
    this.startTimer=setInterval(this.timer,1000)
      
  }
  timer(){

    this.setState({seconds: this.state.seconds + 1})
  }

  handlePauseClick(){

  }
  handleResetClick(){

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

