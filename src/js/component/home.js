import React from "react";

//include images into your bundle
import { Counters } from "./counters.js";
import { Events } from "./events.js";

let estado = true;
let sentido = true;
let delay = 1000;
let valores = "0";
let cero = "0";
let contador = 0;
let salida = "0";
let salida2 = "0";
let salida3 = "0";
let salida4 = "0";
let salida5 = "0";
let salida6 = "0";
let icono = <i className="fas fa-pause-circle"></i>;
let leyendaboton = "  Pausar  ";

function reversa() {
	sentido = false;
}
function avance() {
	sentido = true;
}

function pausa_continua() {
	if (estado == true) {
		estado = false;
		leyendaboton = "Reanudar";
		icono = <i className="fas fa-play-circle"></i>;
	} else {
		estado = true;
		leyendaboton = "  Pausar  ";
		icono = <i className="fas fa-pause"></i>;
	}
}

setInterval(function() {
	if (estado == true) {
		if (sentido == true) {
			contador++;
		} else if (sentido == false) {
			contador--;
		}
	} else if (estado == false) {
		//pass
	}

	if (contador < 0) {
		alert("El contador ha finalizado.");
		contador = 0;
		pausa_continua();
		sentido = true;
	}
	valores = contador.toString();

	if (contador < 10) {
		salida = valores[0];
		salida2 = cero;
		salida3 = cero;
		salida4 = cero;
		salida5 = cero;
		salida6 = cero;
	} else if (contador < 100) {
		salida = valores[1];
		salida2 = valores[0];
		salida3 = cero;
		salida4 = cero;
		salida5 = cero;
		salida6 = cero;
	} else if (contador < 1000) {
		salida = valores[2];
		salida2 = valores[1];
		salida3 = valores[0];
		salida4 = cero;
		salida5 = cero;
		salida6 = cero;
	} else if (contador < 10000) {
		salida = valores[3];
		salida2 = valores[2];
		salida3 = valores[1];
		salida4 = valores[0];
		salida5 = cero;
		salida6 = cero;
	} else if (contador < 100000) {
		salida = valores[4];
		salida2 = valores[3];
		salida3 = valores[2];
		salida4 = valores[1];
		salida5 = valores[0];
		salida6 = cero;
	} else if (contador < 1000000) {
		salida = valores[5];
		salida2 = valores[4];
		salida3 = valores[3];
		salida4 = valores[2];
		salida5 = valores[1];
		salida6 = valores[0];
	} else if (contador > 999999) {
		salida = cero;
		salida2 = cero;
		salida3 = cero;
		salida4 = cero;
		salida5 = cero;
		salida6 = cero;
		contador = 0;
	} else if (contador < 0) {
		contador = 0;
	}
}, delay);

//create your first component
export function Home() {
	return (
		<div id="app">
			<Counters
				cont1={salida}
				cont2={salida2}
				cont3={salida3}
				cont4={salida4}
				cont5={salida5}
				cont6={salida6}
			/>
			<Events
				pausacontinua={pausa_continua}
				lecturaboton={icono}
				leyboton={leyendaboton}
				retroceso={reversa}
				restaurar={avance}
			/>
		</div>
	);
}
