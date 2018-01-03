import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
class App extends Component {
  render() {
    let text = "write some text";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>Where all your dolphin dreams come true.</h2>
        </header>
        <Footer></Footer>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className = "text">{text}</p> */}


      </div>
    );
  } 
}

export default App;
