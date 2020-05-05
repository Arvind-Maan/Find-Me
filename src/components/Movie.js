import React from "react";

const Movie = (props) => {
	return (
		<div className="movie-container">
			<img
				src={
					props.movie.poster_path == null
						? "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg"
						: `https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`
				}
				alt="movie poster"
			/>
			<div>
				<p> {props.movie.original_title}</p>
			</div>
		</div>
	);
};

export default Movie;
