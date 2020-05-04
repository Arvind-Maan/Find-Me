import React from "react";

const SearchBox = (props) => {
	return (
		<div className="searchBox">
			<form className="searchInput" action="" onSubmit={props.handleSubmit}>
				<input
					className="searchInput-form"
					type="text"
					name=""
					placeholder="Search"
					onChange={props.handleChange}
					onSubmit={props.handleSubmit}
				/>
			</form>
			<button className="searchButton" href="#" onClick={props.handleSubmit}>
				<i className="material-icons"> search </i>
			</button>
		</div>
	);
};

export default SearchBox;
