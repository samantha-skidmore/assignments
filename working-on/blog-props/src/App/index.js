//APP INDEX

import React, { Component } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import BlogList from "./BlogList";

function App(props) {
    return (
        <div className="BlogProps">BlogProps
            <Header></Header>
            <div className="BlogList"></div>
            <Footer></Footer>
        </div>
    )
}
export default App;