import React from "react";
import { scroller } from "react-scroll";

const Search = (props) => {
	const scrollToTop = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
		});
	};
	return (
		<div>
			<form onSubmit={props.finder} className='search_wrapper'>
				<input
					type='text'
					class='input'
					placeholder='Who are you looking for?'
					name='artist'
					required
				/>
				<div class='searchbtn'>
					<button onClick={() => scrollToTop("artist")}>
						<i class='fas fa-search'></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
