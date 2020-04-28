import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import { Element } from "react-scroll";

import ImgSLiders from "./components/mainPage";
import VenueApi from "./components/Venue/VenueApi";
import Inform from "./components/Inform";

import Prices from "./components/prices";

function App() {
	return (
		<div
			className='App'
			style={{
				height: "1500px",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<Element name='header'>
				<Header />
			</Element>
			<ImgSLiders />
			<Element name='artist'>
				<VenueApi />
			</Element>
			<Element name='inform'>
				<Inform />
			</Element>
			<Element name='prices'>
				<Prices />
			</Element>
		</div>
	);
}

export default App;
