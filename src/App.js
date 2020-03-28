import React, { Component } from 'react'

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
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default App

