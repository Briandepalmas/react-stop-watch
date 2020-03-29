import React, { Component } from 'react'
// App.css does not appear when typing './' 
//typing it manually does not import App.css
//added css natively in react instead
import './App.css'

export class App extends Component {
  constructor(props){
    super(props);

    this.state={
                seconds: 0,
                minutes: 0,
                pause: false
    }

    //binding the word this to the function allows to use the functions on the buttons 
    this.timer=this.timer.bind(this)
    this.handleStartClick=this.handleStartClick.bind(this)
    this.handlePauseClick=this.handlePauseClick.bind(this)
    this.handleResetClick=this.handleResetClick.bind(this)
    
  }

  handleStartClick(){
    //setInterval calls the timer function every second.
    this.startTimer=setInterval(this.timer,1000)
      
  }
  //this function is the one that adds 1 to "seconds" property every second.
  timer(){
    if (this.state.pause===false){
        this.setState({seconds: this.state.seconds + 1})
      }   
  }
 
 
   
  handlePauseClick(){
    //switches the pause boolean between true and false onclick
    //if pause is true, clearinterval stops the variable assigned to setInterval from updating
    //if pause is toggle back to false it calls the same variable assigned to setInterval that is found in the start button
    //toggle code learned and implemented from Stack Overflow:https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-react-component
    this.setState(pauseSwitch => ({pause: !pauseSwitch.pause}));
   
  if (this.state.pause===true){
      clearInterval(this.startTimer)
      }
      else {
        this.startTimer=setInterval(this.timer,1000)
      }
  
  }
  
  
  //When this function is called it resets the time by setting the seconds property to 0 
  //at the same time it stops the timer function from adding 1 to the seconds property
  handleResetClick(){
    this.setState({seconds: 0});
    clearInterval(this.timer);
  }


//buttons labeled to corresponding function

  render() {
//Import App.css didnt work so i added some style natively
    const style={
      height:"50px",
     width:"100px",
     backgroundColor: "brown",
     color:"yellow",
     fontSize:"20px"
 }

    
    return (
      <div>
        <h1>{this.state.seconds}</h1>
        <button style={style}className="button"onClick={this.handleStartClick}>Start</button>
        <button style={style}className="button"onClick={this.handlePauseClick}>Pause</button>
        <button style={style}className="button"onClick={this.handleResetClick}>Reset</button>
      </div>
    )
  }
}

export default App

