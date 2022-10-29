import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  buttonClick(e) {
    const calc = calculate(this.state, e.target.textContent);
    this.setState(calc);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <section className="grid">
        <div id="a">
          <div className="answerDisplay">
            {total}
            {operation}
            {next}
          </div>
        </div>

        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="c">+/-</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="d">%</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="b">AC</button>
        <button onClick={this.buttonClick} type="button" className="bgOrange" id="e">÷</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="f">7</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="g">8</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="h">9</button>
        <button onClick={this.buttonClick} type="button" className="bgOrange" id="i">x</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="j">4</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="k">5</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="l">6</button>
        <button onClick={this.buttonClick} type="button" className="bgOrange" id="m">-</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="n">1</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="o">2</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="p">3</button>
        <button onClick={this.buttonClick} type="button" className="bgOrange" id="q">+</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="r">0</button>
        <button onClick={this.buttonClick} type="button" className="bgLGrey" id="s">.</button>
        <button onClick={this.buttonClick} type="button" className="bgOrange" id="t">=</button>
      </section>
    );
  }
}

export default Calculator;
