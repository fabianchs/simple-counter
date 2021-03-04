import React from "react";

//include images into your bundle
import { Counters } from "./counters.js";

let valores = "0";
let contador = 999995;
let salida = "0";
let salida2 = "0";
let salida3 = "0";
let salida4 = "0";
let salida5 = "0";
let salida6 = "0";

setInterval(function() {
	contador++;

	valores = contador.toString();

	if (contador < 10) {
		salida = valores[0];
	} else if (contador < 100) {
		salida = valores[1];
		salida2 = valores[0];
	} else if (contador < 1000) {
		salida = valores[2];
		salida2 = valores[1];
		salida3 = valores[0];
	} else if (contador < 10000) {
		salida = valores[3];
		salida2 = valores[2];
		salida3 = valores[1];
		salida4 = valores[0];
	} else if (contador < 100000) {
		salida = valores[4];
		salida2 = valores[3];
		salida3 = valores[2];
		salida4 = valores[1];
		salida5 = valores[0];
	} else if (contador < 1000000) {
		salida = valores[5];
		salida2 = valores[4];
		salida3 = valores[3];
		salida4 = valores[2];
		salida5 = valores[1];
		salida6 = valores[0];
	} else if (contador > 999999) {
		salida = 0;
		salida2 = 0;
		salida3 = 0;
		salida4 = 0;
		salida5 = 0;
		salida6 = 0;
		contador = 0;
	}
}, 1000);

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
		</div>
	);
}
