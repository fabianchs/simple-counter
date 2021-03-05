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
			<div className="row text-center mx-auto  d-flex justify-content-center">
				<div
					className="callout border border-warning rounded p-1 mt-3"
					id="formulario">
					Personalizar contador:
				</div>
			</div>
			<div className="row text-center mx-auto  d-flex justify-content-center">
				<div className="input-group mb-3 mt-3" id="formulario">
					<input
						type="text"
						className="form-control"
						placeholder="Iniciar en"
						aria-label="Username"
					/>
				</div>
			</div>
			<div className="row text-center mx-auto  d-flex justify-content-center">
				<div className="input-group mb-3" id="formulario">
					<input
						type="text"
						className="form-control"
						placeholder="Terminar en"
						aria-label="Username"
					/>
				</div>
			</div>
			<div className="row text-center mx-auto  d-flex justify-content-center">
				<div className="callout border border-dark rounded p-1 mb-3">
					El contador se actualiza en retroceso o avance según el
					inicio y final.
				</div>
			</div>
			<div className="row text-center mx-auto  d-flex justify-content-center">
				<button
					onClick={props.personaliza}
					type="button"
					id="botones2"
					className="btn btn-secondary">
					Actualizar los datos en el contador
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
	restaurar: PropTypes.func,
	personaliza: PropTypes.func
};
