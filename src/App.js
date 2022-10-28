import React from 'react';
import './components/Calculator.js';
import Calculator from './components/Calculator.js'; 

class App extends React.PureComponent {
  render() {
    return (
      <div className='App'>
        <header className='AppHeader'> 
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
