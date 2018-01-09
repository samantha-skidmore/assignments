import React, { Component } from "react";
import "./index.css";

function Boxes(props) {
    let {Room, Furniture, backgroundColor, color} = props;
    let style1 = {backgroundColor: backgroundColor, color: color}
    return (
        <div className="boxes" style = {style1}>
            <h2>{Room}</h2>
            <h3>{Furniture}</h3>

            </div>
    )
}
export default Boxes;
