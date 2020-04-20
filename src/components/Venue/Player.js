import React from "react";

const Player = (props) => {
	return (
		<div>
			<audio controls autoplay>
				<source src={props.music} type='audio/mpeg' />
			</audio>
		</div>
	);
};

export default Player;
