import React from "react";

const SearchBox = (props) => {
	return (
		<div className="search-container">
			<form action="" onSubmit={props.handleSubmit}>
				<input
					type="text"
					placeholder="Search for a movie..."
					onChange={props.handleChange}
				/>
				<div className="input-field"></div>
			</form>
		</div>
	);
};

export default SearchBox;
