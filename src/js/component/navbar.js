import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav
			className="navbar p-3 yellowTxt mb-3"
			style={{ "border-bottom": "2px solid #4e3658", "background-color": "black" }}>
			{/* <Link to="/">
				<span className="navbar-brand mb-0  h1">EI</span>
			</Link> */}
			<Link to="/">
				<button className="btn m-2 yellowTxt" style={{ border: "2px solid #4e3658" }}>
					{"Edian Ibarrola"}
				</button>
			</Link>
			<div className="ml-auto">
				<Link to="/code">
					<button className="btn m-2 yellowTxt" style={{ border: "2px solid #4e3658" }}>
						<i className="fas fa-code" />
					</button>
				</Link>
				<Link to="/music">
					<button className="btn m-2 yellowTxt" style={{ border: "2px solid #4e3658" }}>
						<i className="fas fa-music" />
					</button>
				</Link>
				<Link to="/film">
					<button className="btn m-2 yellowTxt" style={{ border: "2px solid #4e3658" }}>
						<i className="fas fa-video" />
					</button>
				</Link>
				<Link to="/photo">
					<button className="btn m-2 yellowTxt" style={{ border: "2px solid #4e3658" }}>
						<i className="fas fa-camera-retro" />
					</button>
				</Link>
				<Link to="/about">
					<button className="btn m-2 yellowTxt" style={{ border: "2px solid #4e3658" }}>
						<i className="far fa-envelope" />
					</button>
				</Link>
			</div>
		</nav>
	);
};
