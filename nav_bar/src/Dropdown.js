import React, { Component } from 'react';
import './App.css';

const styles = theme => ({})


export default class Dropdown extends Component {
      static defaultProps = {
        title:null,
        list: []
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

      componentWillMount() {
        const { label } = this.props.list[0];
        let firstItem = null;
        if (typeof label != 'undefined') {
          this.checkType(false);
          firstItem = label;
        } else {
          this.checkType(true);
          firstItem = this.props.list[0];
        }
        this.setState({
            labelItem: firstItem
        });
      }

      checkType = (value) => {
        this.setState({
            typeDropdown: value
        });
      };

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
        const {value, label} = this.state.typeDropdown ? {value: index, label: item} : item;
        return (
          <li
            key={index}
            value={value}
            onClick={() => this.chooseItem(label)}
          >
            <a>{label}</a>
          </li>
        )
      };

      render () {
        const { list } = this.props;
        return (
          <div className={`dropdown ${this.state.isOpen ? 'open' : ''}`}>
            <a className="dropdown-toggle" type="button" onClick={this.showDropdown}>
              {this.props.title}
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              {list.map(this.renderDataDropDown)}
            </ul>
        </div>
        )
      }
}
