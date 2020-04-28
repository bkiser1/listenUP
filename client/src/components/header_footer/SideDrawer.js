import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
	const scrollToTop = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
		});
	};

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
				<ListItem button onClick={() => scrollToTop("inform")}>
					ConCerts
				</ListItem>

				<ListItem button onClick={() => scrollToTop("prices")}>
					Prices
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;
