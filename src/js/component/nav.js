import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Navbar(props) {
	return (
		<div className="container-fluid navbar-dark bg-dark">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContener">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{" "}
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
Navbar.propType = {
	brand: PropTypes.string,
	links: PropTypes.string
};
