import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="navigation-container">
        <div class="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
