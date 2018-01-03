import React, { Component } from 'react';
import './App/App.css';
import Header from './App/Header/index.js';
import Conent from './App/Content/index.js';
import Footer from './App/Footer/index.js';

class App extends Component {
    render() {
        let text = "This is my first app";
        return (
            <div>

                <Header></Header>
                <Content></Content>
                <Footer></Footer>

            </div>
        );
    }
}
export default App;