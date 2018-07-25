import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index';
import FindButton from './Button/findButton';

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
  };

  gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return this.gcd(b, a % b);
  };

  fraction = (numer, denom) => {
    let newNum = numer;
    let newDen = denom;
    let whole;
    let divider = this.gcd(newNum, newDen);

    newNum = newNum / divider;
    newDen = newDen / divider;

    if (newNum > newDen) {
      whole = Math.floor(newNum / newDen);
      newNum = newNum - (whole * newDen);
    }
    else {
      whole = "";
    }
    if (newDen === 1) {
      return `${newNum}`;
    }
    return `${whole} ${newNum}/${newDen}`

  }

  rootFinder = () => {
    let a = this.state.a;
    let b = this.state.b;
    let c = this.state.c;
    let result1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c));
    let result2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c));
    let denominator = 2 * a;
    let res1 = this.fraction(result1, denominator);
    let res2 = this.fraction(result2, denominator);
    this.setState({
      showResult: true,
      x1: res1,
      x2: res2
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
      let validSquare = this.findSquare(this.state.a, this.state.b, this.state.c);
      if (validSquare > 0 && validSquare % 1 === 0) {
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

    let mishvaa = null;
    let a = this.state.a;
    let b = this.state.b;
    let c = this.state.c;
    if (a === '1') {
      mishvaa = (
        <h4>x<sup>2</sup> + {this.state.b}x + {this.state.c}</h4>
      )
    }

    else {
      mishvaa = (
        <h4>{this.state.a}x<sup>2</sup> + {this.state.b}x + {this.state.c}</h4>
      )
    }
    if (b.includes('-')) {
      mishvaa = (
        <h4>{this.state.a}x<sup>2</sup>  {this.state.b}x + {this.state.c}</h4>
      )
    }
    if (c.includes('-')) {
      mishvaa = (
        <h4>{this.state.a}x<sup>2</sup> + {this.state.b}x  {this.state.c}</h4>
      )
    }

    if (b.includes('-') && c.includes('-')) {
      mishvaa = (
        <h4>{this.state.a}x<sup>2</sup>  {this.state.b}x  {this.state.c}</h4>
      )
    }

    return (
      <div className="container">
        <h2 className='header'>Let's find the roots</h2>

        {mishvaa}

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
          <button type="button" className="btn btn-danger" onClick={this.clear}>clear</button>
        </p>
        {results}
      </div>
    );
  }
}

export default App;
