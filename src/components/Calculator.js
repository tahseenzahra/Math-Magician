import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonClick = (e) => {
    const calc = calculate(state, e.target.textContent);
    setState(calc);
  };
  const { total, operation, next } = state;
  return (
    <section className="grid">
      <div id="a">
        <div className="answerDisplay">
          {total}
          {operation}
          {next}
        </div>
      </div>

      <button onClick={buttonClick} type="button" className="bgLGrey" id="c">+/-</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="d">%</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="b">AC</button>
      <button onClick={buttonClick} type="button" className="bgOrange" id="e">÷</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="f">7</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="g">8</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="h">9</button>
      <button onClick={buttonClick} type="button" className="bgOrange" id="i">x</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="j">4</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="k">5</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="l">6</button>
      <button onClick={buttonClick} type="button" className="bgOrange" id="m">-</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="n">1</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="o">2</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="p">3</button>
      <button onClick={buttonClick} type="button" className="bgOrange" id="q">+</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="r">0</button>
      <button onClick={buttonClick} type="button" className="bgLGrey" id="s">.</button>
      <button onClick={buttonClick} type="button" className="bgOrange" id="t">=</button>
    </section>
  );
};

export default Calculator;
