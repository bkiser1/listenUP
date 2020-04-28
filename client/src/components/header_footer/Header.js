import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./SideDrawer";

class Header extends Component {
	state = {
		bottomUp: false,
		headerHider: false,
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	////for scrollY axis animation
	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerHider: false,
			});
		} else {
			this.setState({
				headerHider: true,
			});
		}
	};

	toggleDrawer = (value) => {
		this.setState({
			bottomUp: value,
		});
	};

	render() {
		return (
			<AppBar
				position='fixed'
				style={{
					backgroundColor: this.state.headerHider ? "#2f2f2f" : "transparent",
					boxShadow: "none",
					padding: "10 0",
				}}
			>
				<Toolbar>
					<div className='header_logo'>
						<div className='header_font header_logo_venue'>ListenUP</div>
					</div>
					<IconButton
						aria-label='menu'
						color='inherit'
						onClick={() => this.toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>

					<SideDrawer
						open={this.state.bottomUp}
						onClose={(value) => this.toggleDrawer(value)}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
