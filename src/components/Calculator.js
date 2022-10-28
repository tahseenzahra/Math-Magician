import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <section className="grid">
        <button type="button" className="bgLGrey" id="a">0</button>
        <button type="button" className="bgLGrey" id="b">AC</button>
        <button type="button" className="bgLGrey" id="c">+/-</button>
        <button type="button" className="bgLGrey" id="d">%</button>
        <button type="button" className="bgOrange" id="e">/</button>
        <button type="button" className="bgLGrey" id="f">7</button>
        <button type="button" className="bgLGrey" id="g">8</button>
        <button type="button" className="bgLGrey" id="h">9</button>
        <button type="button" className="bgOrange" id="i">*</button>
        <button type="button" className="bgLGrey" id="j">4</button>
        <button type="button" className="bgLGrey" id="k">5</button>
        <button type="button" className="bgLGrey" id="l">6</button>
        <button type="button" className="bgOrange" id="m">-</button>
        <button type="button" className="bgLGrey" id="n">1</button>
        <button type="button" className="bgLGrey" id="o">2</button>
        <button type="button" className="bgLGrey" id="p">3</button>
        <button type="button" className="bgOrange" id="q">+</button>
        <button type="button" className="bgLGrey" id="r">0</button>
        <button type="button" className="bgLGrey" id="s">.</button>
        <button type="button" className="bgOrange" id="t">=</button>
      </section>
    );
  }
}

export default Calculator;
