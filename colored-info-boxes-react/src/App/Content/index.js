import React, { Component } from "react";
function Content(props) {
    return (
        <div>
            <h1>Room: {props.Room}</h1>
            <h3>Furniture: {props.Furniture}</h3>
            <img src= {props.Image} alt=""/>
        </div>
   
    )
}
export default Content;

//when ready, run the app in terminal by typing:  "npm start" from the project/assignment folder
