import React, { Component } from 'react';
import './Sidebar.css';


export default class SideBar extends Component{

	render() {
		const navItems =[{'name':'Home'},{'name':'Courses'},{'name':'Organizations'},{'name':'Activity'}];
		const navListItems = navItems.map((navItem) => <li key={navItem.name}><a className='subnav-menu-links' href='#'>{navItem.name}</a></li>);
		return(
			<div className='side-nav-container'>
				<div className='side-nav'>
					<ul className='menu-items'>
						{navListItems}  
					</ul> 
				</div>
			</div>
		);
	}
}