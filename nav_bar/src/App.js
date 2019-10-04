import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faUser, faBell);

class App extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-list">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <button className="dropdown-btn">Courses</button>
            </li>
          </ul>
        </div>  
        <div className="grow"></div>
        <div className="nav-icons">          
          <button className="nav-icon-buttons">
            <FontAwesomeIcon icon="envelope" color="white"/>
          </button>
          <button className="nav-icon-buttons">
            <FontAwesomeIcon icon="bell" color="white"/>
          </button>
          <button className="nav-icon-buttons">
            <FontAwesomeIcon icon="user" color="white"/>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
