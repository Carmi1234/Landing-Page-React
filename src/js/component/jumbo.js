import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Jumbo(props) {
	return (
		<div className="jumbotron container ml-auto">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.body}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.url}
				role="button">
				{props.buttonText}
			</a>
		</div>
	);
}

Jumbo.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	buttonText: PropTypes.string
};
