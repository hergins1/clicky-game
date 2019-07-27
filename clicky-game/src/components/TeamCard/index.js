import React from "react";

function TeamCard(props){
    return (
        <div className="card grow" onClick={() => props.isClicked(props.id)}>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default TeamCard;