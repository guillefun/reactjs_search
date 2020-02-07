import React, { Component } from 'react';
import '../assets/css/NavBar.css';

class MainNav extends Component{
	render() {
		return (
		  	<nav class="navbar navbar-inverse">
		  	<div class="container-fluid">
			  
			  	<div class="navbar-header">
				  <a class="navbar-brand" href="">{this.props.companyName}</a>
			  	</div>

			  <ul class="nav navbar-nav">				  
				  <li>
					<img class="img-thumbnail" src={this.props.logo} class="logo-icon" alt="logo"/>
				</li>
				<li><a href="">{this.props.clickMsg}</a></li>
				<button className="bOne">ClickMe</button>
			  </ul>
		  	</div>
		  	</nav>
		);
	  }

	//  exchanger(){ Case of NOT possible
	//	$("#img-thumbnail").text('Don`t Click me' );
	//  }
}


export default MainNav;
