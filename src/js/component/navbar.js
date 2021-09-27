import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav
			className="navbar p-3 yellowTxt mb-3"
			style={{ "border-bottom": "2px solid #4e3658", "background-color": "black" }}>
			<Link to="/">
				<span className="navbar-brand mb-0  h1">EI</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn yellowTxt" style={{ border: "2px solid #4e3658" }}>
						Home
					</button>
				</Link>
			</div>
		</nav>
	);
};
