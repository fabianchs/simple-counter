import React from "react";
import PropTypes from "prop-types";

export function Counters(props) {
	return (
		<div className="text-center mx-auto  d-flex justify-content-center mt-5 row">
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<i className="far fa-clock fa-4x"></i>
			</span>
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<h1 id="num">{props.cont6}</h1>
			</span>
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<h1 id="num">{props.cont5}</h1>
			</span>
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<h1 id="num">{props.cont4}</h1>
			</span>
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<h1 id="num">{props.cont3}</h1>
			</span>
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<h1 id="num">{props.cont2}</h1>
			</span>
			<span
				className="badge bg-secondary text-light d-flex justify-content-center align-items-center border border-black"
				id="cont1">
				<h1 id="num">{props.cont1}</h1>
			</span>
		</div>
	);
}
Counters.propTypes = {
	cont1: PropTypes.string,
	cont2: PropTypes.string,
	cont3: PropTypes.string,
	cont4: PropTypes.string,
	cont5: PropTypes.string,
	cont6: PropTypes.string
};
