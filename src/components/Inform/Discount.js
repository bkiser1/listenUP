import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import UseButton from "../utils/Usebutton";

class Discount extends Component {
	state = {
		discountStart: 0,
		discoundEnd: 45,
	};

	countUp = () => {
		if (this.state.discountStart < this.state.discoundEnd) {
			this.setState({
				discountStart: this.state.discountStart + 1,
			});
		}
	};
	///use lifecycle component to update
	//state until the count reaches specified number
	componentDidUpdate() {
		setTimeout(() => {
			this.countUp();
		}, 45);
	}

	render() {
		return (
			<div className='center_wrapper'>
				<div className='discount_wrapper'>
					<Fade onReveal={() => this.countUp()}>
						<div className='discount_percentage'>
							<span>{this.state.discountStart}%</span>
							<span>Off</span>
						</div>
					</Fade>

					<Slide right>
						<div className='discount_description'>
							<h3>Purchase Tickets Now!</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
								ut asperiores dicta quaerat molestiae aliquid odit dignissimos
								consectetur inventore enim perferendis sunt ipsum placeat,
								repudiandae ipsa! Explicabo aut mollitia amet.
							</p>
							<div>
								<UseButton
									text='Purchase Here'
									back='#ffa800'
									color='ffffff'
									link='https://www.google.com/'
								/>
							</div>
						</div>
					</Slide>
				</div>
			</div>
		);
	}
}

export default Discount;
