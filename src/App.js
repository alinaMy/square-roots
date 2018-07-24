import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index';
import FindButton from './Button/findButton';
import * as math from 'mathjs'

class App extends Component {
  state = {
    inputa: '',
    inputb: '',
    inputc: '',
    a: "a",
    b: "b",
    c: "c",
    x1: '',
    x2: '',
    showResult: false
  }

  indexChangeHandlerA = (event) => {
    this.setState({
      inputa: event.target.value,
      a: event.target.value
    })
  }
  indexChangeHandlerB = (event) => {
    this.setState({
      inputb: event.target.value,
      b: event.target.value
    })
  }

  indexChangeHandlerC = (event) => {
    this.setState({
      inputc: event.target.value,
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
      showResult: true,
      x1: result1,
      x2: result2
    })
  }

  clear = () => {
    this.setState({
      showResult: false,
      inputa: '',
      inputb: '',
      inputc: '',
      a: "a",
      b: "b",
      c: "c",
      x1: '',
      x2: ''

    })
  }

  findSquare = (a, b, c) => {
    return Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  }

  render() {
    let results = null;
    if (this.state.showResult) {
      if ((this.findSquare(this.state.a, this.state.b, this.state.c)) > 0) {
        results = (
          <div>
            <p className='result' >x1: {this.state.x1} </p>
            <p className='result' >x2: {this.state.x2}</p>
          </div>
        )
      } else {
        results = (
          <div>
            <p className='result' >roots undefined </p>
          </div>
        )
      }
    }

    return (
      <div class="container">
        <h2 className='header'>Let's find the roots</h2>
        <h3>{this.state.a}x^2 + {this.state.b}x + {this.state.c}</h3>

        <Index
          changed={this.indexChangeHandlerA}
          value={this.state.inputa}
        > a: </Index>


        <Index
          changed={this.indexChangeHandlerB}
          value={this.state.inputb}
        > b: </Index>


        <Index
          changed={this.indexChangeHandlerC}
          value={this.state.inputc}
        > c: </Index>

        <FindButton findRoots={this.rootFinder} />
        <p>
          <button type="button" class="btn btn-danger" onClick={this.clear}>clear</button>
        </p>
        {results}
      </div>
    );
  }
}

export default App;
