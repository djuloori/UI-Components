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
    const navItems =[{"name":"Home", "list": []},{"name":"Courses","list":["CS-2150 Algorithms", "CS-250 Operating Systems", "CS-250 Operating Systems"]},{"name":"Organizations", "list":["Assignment 1"]},{"name":"Activity", "list":[]}];
    const navListItems = navItems.map((navItem) => <Dropdown title= {navItem.name} list={navItem.list} />)


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
                <Dropdown title = "AbhiramChepur" list = {["Profile", "Settings","Profile","Profile", "Settings","Logout"]} />
              </li>
              <li className="notifications">
                  <Dropdown icon = "bell" list = {["Notification 1", "Notification 2","Not"]} />
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
