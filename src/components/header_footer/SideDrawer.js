import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
	return (
		<Drawer
			anchor='right'
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List
				style={{
					backgroundColor: "#3e3e3e",
					color: "red",
				}}
				component='nav'
			>
				<ListItem button onClick={() => console.log("features")}>
					Artist Search
				</ListItem>

				<ListItem button onClick={() => console.log("features")}>
					Trackology
				</ListItem>

				<ListItem button onClick={() => console.log("features")}>
					Links
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;
