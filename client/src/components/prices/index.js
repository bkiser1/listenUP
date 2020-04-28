import React, { Component } from "react";
import UseButton from "../utils/Usebutton";
import Zoom from "react-reveal/Zoom";

class Prices extends Component {
	state = {
		prices: [100, 175, 250],
		seating: ["Deck", "Middle", "Stage"],
		descript: [
			"Stubhub offers great ticket prices for any number of artist due to pandemic there have been no shows check out the site for your favorite artist event",
			" VividSeats offers great ticket prices for any number of artist whether your into Country or Jazz they have it  due to pandemic there have been no shows check out the site for your favorite artist event",
			" TicketClub also offers great ticket prices for any number of artist and a diversity of genres to boot due to pandemic there have been no shows check out the site for your favorite artist event",
		],
		linked: [
			"https://www.stubhub.com/",
			"https://www.vividseats.com/concerts/",
			"https://www.ticketclub.com/events/cheap-concert-tickets",
		],
		delay: [500, 0, 500],
	};

	///function to loop through arrays
	//then render cards
	showBox = () =>
		this.state.prices.map((price, i) => (
			<Zoom delay={this.state.delay[i]} key={i}>
				<div className='pricing_item'>
					<div className='pricing_inner'>
						<div className='pricing_title'>
							<span>${this.state.prices[i]}</span>
							<span>{this.state.seating[i]}</span>
						</div>
						<div className='pricing_description'>{this.state.descript[i]}</div>
						<div className='pricing_button'>
							<UseButton
								text='Purchase'
								back='#ffa800'
								color='ffffff'
								link={this.state.linked[i]}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className='bck_black'>
				<div className='center_wrapper pricing_section'>
					<h2>Prices</h2>

					<div className='pricing_wrapper'>{this.showBox()}</div>
				</div>
			</div>
		);
	}
}

export default Prices;
