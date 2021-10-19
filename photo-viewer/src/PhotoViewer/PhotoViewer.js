import React from "react";
import "./PhotoViewer.css"

const PhotoViewer = (props) => {
    
    return (
        <div className={"PhotoViewer"}>
            <img src={props.src} alt={"Photo being viewed"}/>
        </div>
    )
}

export default PhotoViewer;

