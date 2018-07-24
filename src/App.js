import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index'

class App extends Component {
  state = {
    a: "a",
    b: "b",
    c: "c",
    x1: '',
    x2: ''
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
    let a = this.state.a;
    let b = this.state.b;
    let c = this.state.c;
    let result1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let result2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    this.setState({
      x1: result1,
      x2: result2
    })
  }

  clear = () => {
    this.setState({
        a: "a",
        b: "b",
        c: "c",
        x1: '',
        x2: ''
    })
  }
  render() {
    let results = null;
    let square = Math.sqrt(Math.pow(this.state.b, 2) - 4 * this.state.a * this.state.c);
    if (square > 0) {
      results = (
        <div>
          <p>x1: {this.state.x1} </p>
          <p>x2: {this.state.x2}</p>
        </div>
      )
    } else {
      results = (
        <div>
          <p>roots undefined </p>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Let's find the roots</h1>
        <h2>{this.state.a}x^2 + {this.state.b}x + {this.state.c}</h2>

        <Index
          changed={this.indexChangeHandlerA}
          value = {this.state.a}
        > a: </Index>


        <Index
          changed={this.indexChangeHandlerB}
          value = {this.state.b}
        > b: </Index>


        <Index
          changed={this.indexChangeHandlerC}
          value = {this.state.c}
        > c: </Index>

        <p>
          <button onClick={this.rootFinder}>find the roots</button>
        </p>
        <p>
          <button onClick={this.clear}>clear</button>
        </p>
        {results}

      </div>
    );
  }
}

export default App;
