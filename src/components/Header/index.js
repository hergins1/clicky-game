import React from "react";

function Header(props){
    return(
        <div className="header">
            <span className="title">Clicky Game</span>    
            <span className="scores">Score: {props.score}</span>
        </div>
    )
};

export default Header;