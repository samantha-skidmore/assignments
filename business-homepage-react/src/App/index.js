// APP INDEX

import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import "./app.css"; 

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
} 

export default App;
