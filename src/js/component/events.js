import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Events(props) {
	return (
		<div>
			<div className="row text-center mx-auto mt-3 d-flex justify-content-center ">
				<div>
					<button
						onClick={props.retroceso}
						type="button"
						id="botones"
						className="btn btn-info m-1">
						<i className="fas fa-undo"></i> Retroceso
					</button>
				</div>
				<div>
					<button
						onClick={props.pausacontinua}
						type="button"
						id="botones"
						className="btn btn-success m-1">
						{props.lecturaboton} {props.leyboton}
					</button>
				</div>
				<div>
					<button
						onClick={props.restaurar}
						type="button"
						id="botones"
						className="btn btn-info m-1">
						<i className="fas fa-redo-alt"></i> Restaurar
					</button>
				</div>
			</div>
		</div>
	);
}
Events.propTypes = {
	pausacontinua: PropTypes.func,
	lecturaboton: PropTypes.string,
	leyboton: PropTypes.string,
	retroceso: PropTypes.func,
	restaurar: PropTypes.func
};
