import React from 'react';
import logo from './logoUniovi.png';
import './NavBar.css';

function NavBar() {
  return (
    <nav class="navbar navbar-inverse">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="">Uniovi Blog</a>
		</div>
		<ul class="nav navbar-nav">
			<li class="active"><a href="">Click me</a></li>
		</ul>
        <ul class="nav navbar-nav">
            <li><img class="img-thumbnail" src={logo} class="logo-icon" alt="logo"/></li>
        </ul>
	</div>
	</nav>
  );
}

export default NavBar;
