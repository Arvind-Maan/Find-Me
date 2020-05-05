import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";
import MovieGrid from "./components/MovieGrid";
import Pagination from "./components/Pagination";

class App extends React.Component {
	constructor() {
		super();
		this.api_url = "https://api.themoviedb.org/3/search/movie";
		this.key = process.env.REACT_APP_MDB_API_KEY;
		this.state = {
			term: "",
			movies: [],
			totalMovies: 0,
			currPage: 1,
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
		fetch(`${this.api_url}?api_key=${this.key}&query=${this.state.term}`).then(
			(data) =>
				data.json().then((data) => {
					try {
						this.setState({
							movies: [...data.results],
							totalMovies: data.total_results,
						});
					} catch (err) {
						console.log(err);
					}
				}),
		);
	};

	onChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onPageChange = (numOfPage) => {
		fetch(
			`${this.api_url}?api_key=${this.key}&query=${this.state.term}&page=${numOfPage}`,
		).then((data) =>
			data.json().then((data) => {
				try {
					this.setState({ movies: [...data.results], currPage: numOfPage });
				} catch (err) {
					console.log(err);
				}
			}),
		);
	};

	render() {
		const numOfPages = Math.floor(this.state.totalMovies / 20);
		return (
			<div className="App">
				<Nav />
				<SearchBox handleSubmit={this.onSubmit} handleChange={this.onChange} />
				<MovieGrid movies={this.state.movies} />
				{this.state.totalMovies > 20 ? (
					<Pagination
						pages={numOfPages}
						onPageChange={this.onPageChange}
						currPage={this.currPage}
					/>
				) : (
					""
				)}
			</div>
		);
	}
}

export default App;
