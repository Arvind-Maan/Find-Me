import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";
import MovieGrid from "./components/MovieGrid";
class App extends React.Component {
	constructor() {
		super();
		this.api_url = "https://api.themoviedb.org/3/search/movie";
		this.key = process.env.REACT_APP_MDB_API_KEY;
		this.state = {
			term: "",
			movies: [],
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
		fetch(`${this.api_url}?api_key=${this.key}&query=${this.state.term}`).then(
			(data) =>
				data.json().then((data) => {
					try {
						this.setState({ movies: [...data.results] });
					} catch (err) {
						console.log(err);
					}
				}),
		);
	};

	onChange = (e) => {
		this.setState({ term: e.target.value });
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<SearchBox handleSubmit={this.onSubmit} handleChange={this.onChange} />
				<MovieGrid movies={this.state.movies} />
			</div>
		);
	}
}

export default App;
