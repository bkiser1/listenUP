import React from "react";
import Button from "@material-ui/core/Button";

const UseButton = (props) => {
	return (
		<Button
			href={props.link}
			variant='contained'
			size='small'
			style={{
				background: props.back,
				color: props.color,
			}}
		>
			{props.text}
		</Button>
	);
};

export default UseButton;
