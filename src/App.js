import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <React.StrictMode>
        <div className="App">
          <header className="AppHeader">
            <Calculator />
          </header>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
