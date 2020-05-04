import React from "react";
import Movie from "./Movie";

const MovieGrid = (props) => {
	return (
		<div className="movie-grid-container">
			{props.movies.map((movie, index) => {
				return <Movie key={index} movie={movie} />;
			})}
		</div>
	);
};

export default MovieGrid;
