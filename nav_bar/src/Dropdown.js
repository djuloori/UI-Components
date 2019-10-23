import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from "../assets/useravatar.png";
import './App.css';

// const styles = theme => ({})
var classNames = require('classnames');

export default class Dropdown extends Component {
      static defaultProps = {
        title:null,
        list: [],
        useIcon:false,
        useBadge:false,
        list2:[]
      };

      constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          labelItem: null,
          typeDropdown: null
        };
        this.showDropdown = this.showDropdown.bind(this);
      }

      showDropdown = () => {
        this.setState({ isOpen: true });
        document.addEventListener("click", this.hideDropdown);
      };

      hideDropdown = () => {
        this.setState({ isOpen: false });
        document.removeEventListener("click", this.hideDropdown);
      };

      chooseItem = (value) => {
        if (this.state.labelItem !== value) {
          this.setState({
            labelItem: value
          })
        }
      };

      renderDataDropDown = (item, index) => {
        return (
          <li className="dropdown-list"
            key={index}
            value={item}
          >
            <a className="dropdown-item">{item}</a>
          </li>
        )
      };

      render () {
        const { list } = this.props;
        const { list2 } = this.props;
        let icon = this.props.useIcon?<FontAwesomeIcon className="user-notification" icon="bell" color="white"/>:<span className="caret"></span>
        const useBadge = this.props.useBadge;
        var dropdownClass = classNames({
           dropdown: true,
          'open': this.state.isOpen,
          '': !this.state.isOpen
        });
        var multidropdownClass = classNames({
          dropdownMulti: true,
          'open': this.state.isOpen,
          '': !this.state.isOpen
        });
        if (list2.length===0){
          return (
            <div className={dropdownClass}>
              <div className="dropdown-toggle" type="button" onClick={this.showDropdown}>
              {useBadge?<img className="badge" src={user} alt=""></img>:null}
              <span className="title">{this.props.title}</span>
              {icon}
              </div>
              <ul className="dropdown-menu">
                {list.map(this.renderDataDropDown)}
              </ul>
          </div>
          )}
          return (
            <div className={multidropdownClass}>
              <div className="dropdown-toggle" type="button" onClick={this.showDropdown}>
                <span>{this.props.title}</span>
                {icon}
              </div>
              <ul className="dropdown-menu">
              <ul className="first">
              {list2.map(this.renderDataDropDown)}
              </ul>
          {list.length>0 ?(
          <ul className="second">
                {list.map(this.renderDataDropDown)}
           </ul>):(
             <ul className="second-empty">
             <li><div className="list-item">You have not signed up to any {this.props.title}</div></li>
            </ul>)}
           </ul>
          </div>
        )
      }
    }
