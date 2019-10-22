import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const styles = theme => ({})


export default class Dropdown extends Component {
      static defaultProps = {
        title:null,
        list: [],
        icon:null,
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
          <li
            key={index}
            value={item}
          >
            <a>{item}</a>
          </li>
        )
      };

      render () {
        const { list } = this.props;
        const { list2 } = this.props;
        let icon;
        if (this.props.icon=="bell"){
        icon = <FontAwesomeIcon className = "user-notification" icon="bell" color="white"/>
      } else{
        icon = <span className="caret"></span>
      }
       if (list2.length===0){
        return (
          <div className={`dropdown ${this.state.isOpen ? 'open' : ''}`}>
            <a className="dropdown-toggle" type="button" onClick={this.showDropdown}>
              {this.props.title}
              {icon}
            </a>
            <ul className="dropdown-menu">
              {list.map(this.renderDataDropDown)}
            </ul>
        </div>
      )}
        else{
          return (
            <div className={`dropdown-multi ${this.state.isOpen ? 'open' : ''}`}>
              <a className="dropdown-toggle" type="button" onClick={this.showDropdown}>
                {this.props.title}
                {icon}
              </a>
              <ul className="dropdown-menu">
              <ul className="first">
              {list2.map(this.renderDataDropDown)}
      </ul>
      {list.length>0 ?(
      <ul className="second">
            {list.map(this.renderDataDropDown)}
       </ul>):(
         <ul className="second-empty">
         <li><a>You have not signed up to any {this.props.title}</a></li>
        </ul>)}
       </ul>
          </div>
        )
      }
      }
    }
