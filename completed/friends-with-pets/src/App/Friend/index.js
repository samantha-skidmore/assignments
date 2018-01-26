//FRIEND INDEX
import React, { Component } from "react";
import Pets from '../Pets';

function Friend(props) {
    return (
        <div>
            <h3>Name: {props.friend.name}</h3>
            <h4>Age: {props.friend.age}</h4>
            <h4>Pets:</h4>
            <Pets pets={props.friend.pets}/>
        </div>
    );
} 

export default Friend;