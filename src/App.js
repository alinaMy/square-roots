import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index'

class App extends Component {
  state = {
    index: [
      { a: "a" },
      { b: "b" },
      { c: "c" }
    ]
  }
  indexChangeHandlerA = (event) => {
    this.setState({
      index: [
        { a: event.target.value }
      ]
    })
  }
  indexChangeHandlerB = (event) => {
    this.setState({
      index: [
        { b: event.target.value }
      ]
    })
  }

  indexChangeHandlerC = (event) => {
    this.setState({
      index: [
        { c: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Let's find the roots</h1>
        <h2>ax^2 + bx + c</h2>
        <p>
          <Index
            changed={this.indexChangeHandlerA}
          > a: </Index>
        </p>
        <p>
          <Index
            changed={this.indexChangeHandlerB}
          > b: </Index>
        </p>
        <p>
          <Index
            changed={this.indexChangeHandlerC}
          > c: </Index>
        </p>
        <span onChange={this.indexChangeHandlerA}

        > {this.state.index[0].a}x^2 + </span>
        <span onChange={this.indexChangeHandlerB}

        > {this.state.index[1].b}x + </span>
        <span onChange={this.indexChangeHandlerC}

        > {this.state.index[2].c} </span>
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
