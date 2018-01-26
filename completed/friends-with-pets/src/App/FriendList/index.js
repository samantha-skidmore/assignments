//FRIENDLIST INDEX

import React, { Component } from "react";
import Friend from "../Friend";

function FriendList(props) {
    const friends = props.friends.map(
        (friend) => {
            return <Friend friend={friend}/>
        }
    )
    return (
        <div className="friendlist-wrap">
            {friends}
        </div>
    );
}

export default FriendList 