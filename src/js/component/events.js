import React from "react";
import PropTypes from "prop-types";

export function Events(props) {
	return (
		<div className="text-center mx-auto  d-flex justify-content-center ">
			<div>
				<button
					onClick={props.pausacontinua}
					type="button"
					className="btn btn-success m-1">
					{props.lecturaboton} {props.leyboton}
				</button>
			</div>
			<div>
				<button
					onClick={props.retroceso}
					type="button"
					className="btn btn-info m-1">
					<i className="fas fa-undo"></i> Retroceso
				</button>
			</div>
			<div>
				<button
					onClick={props.restaurar}
					type="button"
					className="btn btn-info m-1">
					<i className="fas fa-redo-alt"></i> Restaurar
				</button>
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
