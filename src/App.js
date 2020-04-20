import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";

import ImgSLiders from "./components/mainPage";
import VenueApi from "./components/Venue/VenueApi";

function App() {
	return (
		<div
			className='App'
			style={{
				height: "1500px",
			}}
		>
			<Header />
			<ImgSLiders />
			<VenueApi />
		</div>
	);
}

export default App;
