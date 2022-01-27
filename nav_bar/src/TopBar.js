import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faBell} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

library.add(faSearch, faBell);

class App extends Component {

	render() {
		const navItems = [{'name':'Courses','list':['CS-2150 Algorithms', 'CS-250 Operating Systems', 'CS-250 Operating Systems','CS-2150 Algorithms', 'CS-250 Operating Systems', 'CS-250 Operating Systems','CS-2150 Algorithms', 'CS-250 Operating Systems', 'CS-250 Operating Systems','CS-2150 Algorithms', 'CS-250 Operating Systems', 'CS-250 Operating Systems','CS-2150 Algorithms', 'CS-250 Operating Systems', 'CS-250 Operating Systems','CS-2150 Algorithms', 'CS-250 Operating Systems', 'CS-250 Operating Systems'], 'list2':['All Courses', 'Frequently Visited']},{'name':'Organizations', 'list':[], 'list2':['All Organizations']},{'name':'More', 'list':['Course Schedule','Events','Exam Schedule'], 'list2':[]}];
		const navListItems = navItems.map((navItem) => <li key={navItem.name}><Dropdown title={navItem.name} list={navItem.list} list2={navItem.list2}/></li>);


		return (
			<div className='navigation-container'>
				<div className='brand'>
					<a href='#'><img className='app-image' src={logo} alt=''></img></a>
				</div>
				<div className='navbar-subnav'>
					<ul className='nav-menu-items'>
						{navListItems}
					</ul>
				</div>
				<div className='navigation-search-bar'>
					<form action='#'>
						<input type='text' className='search-box' placeholder=' Search '/>
						<button className='search-btn'>
							<FontAwesomeIcon icon='search' color='black' />
						</button>
					</form>
				</div>
				<div className='navigation-icons'>
					<ul className='list-dropdwn-icons'>
						<li>
							<Dropdown title='Abhiram Chepur' useBadge={true} list={['Profile', 'Settings','Profile','Profile', 'Settings','Logout']} />
						</li>
						<li className='notifications'>
							<Dropdown useIcon={true} list={['Notification 1', 'Notification 2','Not']} />
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
