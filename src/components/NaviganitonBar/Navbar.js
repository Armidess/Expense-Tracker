import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo">
					Expense Tracker
					<i className="fab fa-firstdraft" />
				</Link>
				<ul className="nav-menu">
					<li className="nav-item">
						<Link to="/" className="nav-links">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/services" className="nav-links">
							Services <i className="fas fa-caret-down" />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/products" className="nav-links">
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact-us" className="nav-links">
							Contact Us
						</Link>
					</li>
					<li>
						<Link to="/sign-up" className="nav-links-mobile">
							Sign Up
						</Link>
					</li>
				</ul>
				<Button />
			</nav>
		</>
	);
}

export default Navbar;
