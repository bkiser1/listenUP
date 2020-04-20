import React, { Component } from "react";
import axios from "axios";

import Search from "./Search";
import Player from "./Player";

class VenueApi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			artist: "",
			isloaded: false,
			show: false,
		};
	}

	//using axios to bring in rest api data
	onChange = (e) => {
		e.preventDefault();
		const musician = e.target.elements.artist.value;
		console.log(musician);
		axios
			.get(`/search?q=${musician}`)
			.then((res) => {
				const artist = res.data.data[0];
				console.log(artist);
				this.setState({
					artist,
					isloaded: true,
				});
			})
			.catch((err) => console.log(err.response));
	};

	render() {
		const { artist } = this.state;
		console.log(artist);
		return (
			<div>
				<Search finder={this.onChange} />;
				<Player />
			</div>
		);
	}
}

export default VenueApi;
