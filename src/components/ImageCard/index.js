import React from "react";
import "./style.css";

function ImageCard (props) {
    return (
        <img className = 'card' alt = {props.id} onClick={props.imageClick} />
    )
};

export default ImageCard; 