import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Careers from './components/Careers';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container">
            <ul className="nav">
              <li><NavLink exact to="/">Contact</NavLink></li>
              <li><NavLink to="/careers">Careers</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <div className="pages">
              <Route exact path="/" component={Contact}/>
              <Route path="/careers" component={Careers}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
