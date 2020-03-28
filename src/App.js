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
      
  }

  handlePauseClick(){

  }
  handleResetClick(){

  }



  render() {
    return (
      <div>
        <h1>0:00</h1>
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default App

