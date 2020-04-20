import React from "react";
import ImgCarousel from "./ImgCarousel";

const ImgSLiders = () => {
	return (
		<div style={{ position: "relative" }}>
			<ImgCarousel />

			<div className='artist_name'>
				<div
					className='wrapper'
					style={{
						color: "black",
						fontFamily: "roboto",
					}}
				></div>
			</div>
		</div>
	);
};

export default ImgSLiders;
