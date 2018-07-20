import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Contact from './Contact';
import Home from './Home';
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/weather">Clima</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>

          </nav>
        </header>
            <Route path="/home" component={Home} />
            <Route path="/weather" component={Weather} />
            <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
