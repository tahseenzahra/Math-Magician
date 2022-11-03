import React from 'react';
import QuoteCSS from '../css-modules/Quote.module.css';
// className={QuoteCSS.}

function Quote() {
  return (
    <div className={QuoteCSS.quote}>
      <blockquote>
        Mathimatics is not about numbers, equotions, components,
        or algorithms: it is about understanding
      </blockquote>
      <b>-William Paul Thurston</b>
    </div>
  );
}

export default Quote;
