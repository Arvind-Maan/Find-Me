import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Nav/>
      <SearchBox/>
    </div>
  );
}

export default App;
