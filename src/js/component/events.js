import React from "react";
import PropTypes from "prop-types";

export function Events(props) {
	return (
		<div className="text-center mx-auto  d-flex justify-content-center mt-1">
			<button
				onClick={props.pausacontinua}
				type="button"
				className="btn btn-success">
				Secondary
			</button>
		</div>
	);
}
Events.propTypes = {
	pausacontinua: PropTypes.func
};
