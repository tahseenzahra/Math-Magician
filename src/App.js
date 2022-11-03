import React from 'react';
import Calculator from './components/Calculator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <Switch>
          <Route path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
            <Route exact path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
      // <React.StrictMode>
      //   <div className="App">
      //     <header className="AppHeader">
      //       <Calculator />
      //     </header>
      //   </div>
      // </React.StrictMode>
    );
  }
}

export default App;
