import React, { Component } from "react";
import Boxes from "./Boxes";
import "./index.css"; 

function Content(props) {
    let data = [{
        
        Room: "Living Room",
        Furniture: "Couch",

    },
   
    {    
        Room: "Dining Room",
        Furniture: "Table and Chairs",
    },

    {    
        Room: "Kitchen",
        Furniture: "Refrigerator",
    }, 
    {    
        Room: "Master Bedroom",
        Furniture: "King Bed",
    },
    {    
        Room: "Laundry Room",
        Furniture: "Washer and Dryer",
    },  
    {    
        Room: "Office",
        Furniture: "Desk",
    },
    {    
        Room: "Family Room",
        Furniture: "Armoire",
    },
    {    
        Room: "Backyard",
        Furniture: "Firepit",
    },
    {    
        Room: "Garage",
        Furniture: "Workbench",
    }]

return (
    <div className="box-wrapper">
        {data.map((myModules) => {
            return <Boxes {...myModules}></Boxes>
            })}
            </div>
            ) 
        }      
export default Content;

//when ready, run the app in terminal by typing:  "npm start" from the project/assignment folder
 

 