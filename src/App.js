import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index'

class App extends Component {
  state = {
      a: "a",
      b: "b",
      c: "c"
  }
  indexChangeHandlerA = (event) => {
    this.setState({
        a: event.target.value
    })
  }
  indexChangeHandlerB = (event) => {
    this.setState({
        b: event.target.value
    })
  }

  indexChangeHandlerC = (event) => {
    this.setState({
        c: event.target.value 
    })
  }

  rootFinder = () => {
    

}
  render() {


    return (
      <div className="App">
        <h1>Let's find the roots</h1>
        <h2>ax^2 + bx + c</h2>
        
          <Index
            changed={this.indexChangeHandlerA}
          > a: </Index>
        
        
          <Index
            changed={this.indexChangeHandlerB}
          > b: </Index>
        
        
          <Index
            changed={this.indexChangeHandlerC}
          > c: </Index>
        
        <p> {this.state.a}x^2 + {this.state.b}x + {this.state.c} </p>
        <p>
          <button>find the roots</button>
        </p>
        <p>x1: </p>
        <p>x2: </p>

      </div>
    );
  }
}

export default App;
