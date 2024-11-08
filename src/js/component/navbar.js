import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="row navbar navbar-light bg-light mb-3">
		
			<div className="col-1"></div>
			<div className="col-8 title">
				<Link to="/">
					<span><h1>CONTACT LIST</h1></span>
				</Link>
			</div>
			<div className="col-1"></div>
			<div className="col-1">
				<Link to="/addContact">
					<button className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
			<div className="col-1"></div>
		</nav>
		
		
	);
};
