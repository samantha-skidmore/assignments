import React, { Component } from "react";
import Content from "./Content";
import images from "./images";

function App(props) {
    return (
        <div class="Container">
            <Content
                Room="Living Room"
                Furniture="Couch"
                Image="./images/livingroom.jpeg">
            </Content>

            <Content
                Room="Bedroom"
                Furniture="Bed"
                Image="">
            </Content>

            <Content
                Room="Dining Room"
                Furniture="Table and Chairs"
                Image="">
            </Content>

            <Content
                Room="Kitchen"
                Furniture="Bar"
                Image="">
            </Content>
        </div>
        ) 
    }
        
export default App;

//when ready, run the app in terminal by typing:  "npm start" from the project/assignment folder

