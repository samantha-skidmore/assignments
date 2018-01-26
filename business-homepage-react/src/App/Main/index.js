// MAIN INDEX

import React from 'react'
import Recipes from "./Recipes";
import MyPantry from "./MyPantry";
import Receipts from "./Receipts";
import "./main.css";

function Main(props) {
    return (
        <div className="All">
            <div className="Recipes"><h1>My Recipes</h1></div>
            <div className="MyPantry"><h1>My Pantry Items</h1> </div>
            <div className="Receipts"><h1>My Receipts</h1></div>
        </div>
    )
}

export default Main;  