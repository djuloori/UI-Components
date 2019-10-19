import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faBell} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
import user from "../assets/useravatar.png";

library.add(faSearch, faBell);

class Topbar extends Component {

  render() {
    const navItems =[{"name":"Home"},{"name":"Courses"},{"name":"Organizations"},{"name":"Activity"}];
    const navListItems = navItems.map((navItem) => <li><a className="nav-menu-links" href="#">{navItem.name}</a></li>)

    return (
      <div className="navigation-container">
        <div className="brand">
          <a href="#"><img className="app-image" src={logo} alt=""></img></a>
        </div>
        <div className="navbar-subnav">
          <ul className="nav-menu-items">
            {navListItems}
          </ul>
        </div>
        <div className="navigation-search-bar">
          <form action="#">
            <input type="text" className="search-box" placeholder=" Search "/>
            <button className="search-btn">
              <FontAwesomeIcon icon="search" color="black" />
            </button> 
          </form>
        </div>
        <div className="navigation-icons">
            <ul className="list-dropdwn-icons">
              <li>
                <button className="btn-icons user-avatar">
                   <img className="badge" src={user} alt=""></img>
                   <span className="user-name">Kushal Dhruva</span>
                   <span className="caret"></span>  
                </button>
              </li>
              <li>
                <button className="btn-icons user-notification">
                  <FontAwesomeIcon icon="bell" color="white"/>
                </button>                                
              </li>              
            </ul>
        </div>
      </div>
    );
  }
}

export default Topbar;
