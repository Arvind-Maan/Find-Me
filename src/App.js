import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";
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
					this.setState({ movies: [...data.results] });
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
			</div>
		);
	}
}

export default App;
