import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faEnvelope, faUser, faBell} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faEnvelope, faUser, faBell);

class App extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-list-items">
          <ul className="list-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Organizations</a></li>
            <li><a href="#">Activity</a></li>   
          </ul>
        </div>
        <div className="navigation-search-bar">
          <form action="#">
            <input type="text" className="searchBox" placeholder=" Search "/>
            <button class="searchButton">
              <FontAwesomeIcon icon="search" color="black" />
            </button> 
          </form>
        </div>
        <div className="navigation-icons">
            <ul className="list-dropdwn-icons">
              <li>
                <button>
                  <FontAwesomeIcon icon="envelope" color="white"/>
                </button>                
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon="bell" color="white"/>
                </button>                                
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon="user" color="white"/>
                </button>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
