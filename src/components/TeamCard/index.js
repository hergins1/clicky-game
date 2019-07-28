import React from "react";
import "./style.css";

function TeamCard(props){
    return (
        <div className="card grow" onClick={() => props.itemClick(props.id)}>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default TeamCard;