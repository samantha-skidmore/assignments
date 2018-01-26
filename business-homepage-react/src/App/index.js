// APP INDEX

import React from "react"
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Pages from "./Pages";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import MyAccount from "./Pages/MyAccount";
import Recipes from "./Main/Recipes";
import MyPantry from "./Main/MyPantry";
import Receipts from "./Main/Receipts";
import "./app.css";

function App(props) {
    return (
        <div className="containerAll">
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="./Pages/AboutUs" component={AboutUs} />
                <Route path="./Pages/Resources" component={Resources} />
                <Route path="./Pages/ContactUs" component={ContactUs} />
                <Route path="./Pages/MyAccount" component={MyAccount} />
                <Route path="./Main/Recipes" component={Recipes} />
                <Route path="./Main/MyPantry" component={MyPantry} />
                <Route path="./Main/Receipts" component={Receipts} />
            </Switch>
            <Footer />
        </div>

    )
}

export default App;