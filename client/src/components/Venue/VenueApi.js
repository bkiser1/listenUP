import React, { Component } from "react";
import axios from "axios";

import Search from "./Search";
import Footer from "../header_footer/Footer";

class VenueApi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			artist: "",
			isLoaded: false,
			show: false,
			error: null,
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
				console.log(res);
				this.setState({
					artist: res.data.data,
					isLoaded: true,
				});
			})
			.catch((err) => console.log(err.response));
	};

	render() {
		//destructure from state to use
		const { artist, isLoaded, error } = this.state;
		console.log(artist);

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<div>
					<Search finder={this.onChange} />
				</div>
			);
		} else {
			return (
				<div className=' artist_container'>
					{artist.map((artist, i) => (
						<div className='artist_srch'>
							<div className='img_box'>
								<img
									key={i}
									src={artist.album.cover_medium}
									alt='album cover'
								/>
							</div>
							<div className='inner_artist'>
								<p>{artist.artist.name}</p>
								<p>{artist.album.title}</p>
								<p>{artist.explicit_lyrics}</p>
								<p>{artist.title_short}</p>
								<audio controls>
									{" "}
									<source src={artist.preview} type='audio/mpeg'></source>
								</audio>
							</div>
						</div>
					))}
					<Search finder={this.onChange} />
					<Footer />
				</div>
			);
		}
	}
}

export default VenueApi;
