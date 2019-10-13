import React, { Component } from 'react';
import './App.css';
import Dropdown from "./Dropdown";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faBell} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
import user from "../assets/useravatar.png";

library.add(faSearch, faBell);

class App extends Component {

  render() {
    const navItems =[{"name":"Home"},{"name":"Courses","list":["Course 12234235","Course 2", "Course 3"]},{"name":"Organizations", "list":["Organization 214123","Organization 2"]},{"name":"Activity"}];
    const navListItems = navItems.map((navItem) => {if ('list' in navItem)
                                                        return <Dropdown title= {navItem.name} list={navItem.list} />
                                                    return <li><a className="nav-menu-links" href="#">{navItem.name}</a></li>});

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
                <img className="badge" src={user} alt=""></img>
                <Dropdown title = "AbhiramChepur" list = {["Profile", "Settings","Logout"]} />
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

export default App;
