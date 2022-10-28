import React from 'react';
import './Calculator.css';

export class Calculator extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <section className="grid">
        <div className="bgLGrey" id="a">0</div>
        <div className="bgLGrey" id="b">AC</div>
        <div className="bgLGrey" id="c">+/-</div>
        <div className="bgLGrey" id="d">%</div>
        <div className="bgOrange" id="e">/</div>
        <div className="bgLGrey" id="f">7</div>
        <div className="bgLGrey" id="g">8</div>
        <div className="bgLGrey" id="h">9</div>
        <div className="bgOrange" id="i">*</div>
        <div className="bgLGrey" id="j">4</div>
        <div className="bgLGrey" id="k">5</div>
        <div className="bgLGrey" id="l">6</div>
        <div className="bgOrange" id="m">-</div>
        <div className="bgLGrey" id="n">1</div>
        <div className="bgLGrey" id="o">2</div>
        <div className="bgLGrey" id="p">3</div>
        <div className="bgOrange" id="q">+</div>
        <div className="bgLGrey" id="r">0</div>
        <div className="bgLGrey" id="s">.</div>
        <div className="bgOrange" id="t">=</div>
      </section>
    );
  }
}

export default Calculator;
