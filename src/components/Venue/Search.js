import React from "react";

const Search = (props) => {
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
					<button>
						<i class='fas fa-search'></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
