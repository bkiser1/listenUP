import React from "react";
import Slider from "react-slick";
import imgageOne from "../../resources/images/sayitlouder.jpg";
import imgageTwo from "../../resources/images/sayitoud.jpg";
import imgageThree from "../../resources/images/fandome.jpg";

const ImgCarousel = () => {
	///slider controls
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
	};

	return (
		<div
			className='carousel_wrapper'
			style={{
				height: `${window.innerHeight}px`,
				overflow: "hidden",
			}}
		>
			<Slider {...settings}>
				<div>
					<div
						className='carousel_image'
						style={{
							background: `url(${imgageOne})`,
							height: `${window.innerHeight}px`,
							backgroundSize: "cover",
						}}
					></div>
				</div>
				<div>
					<div
						className='carousel_image'
						style={{
							background: `url(${imgageTwo})`,
							height: `${window.innerHeight}px`,
							backgroundSize: "cover",
						}}
					></div>
				</div>
				<div>
					<div
						className='carousel_image'
						style={{
							background: `url(${imgageThree})`,
							height: `${window.innerHeight}px`,
							backgroundSize: "cover",
						}}
					></div>
				</div>
			</Slider>
		</div>
	);
};

export default ImgCarousel;
