//PET INDEX

import React, { Component } from "react";

function Pets(props) {
    const petsDisplay = props.pets.map(function(pet){
        return (
            <div>{pet.name} {pet.breed}</div>
        )
    })
    return (
        <ul>
           {petsDisplay}
        </ul> 
    );
}

export default Pets; 