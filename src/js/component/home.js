import React from "react";

//include images into your bundle

import { Counters } from "./counters.js";
//create your first component
export function Home() {
	return (
		<div id="app">
			<Counters
				cont1="0"
				cont2="0"
				cont3="0"
				cont4="0"
				cont5="0"
				cont6="0"
			/>
		</div>
	);
}
