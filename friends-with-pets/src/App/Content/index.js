import React, { Component } from "react";

function Content(props) {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <h2>Sub-Title: {props.sub-title}</h2>
        </div>
    )
}
export default Content;
