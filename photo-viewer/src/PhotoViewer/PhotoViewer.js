import React from "react";
import "./PhotoViewer.css"

const PhotoViewer = () => {
    return (
        <div className={"photo-viewer"}>
            <img src={"https://picsum.photos/1000/500"} alt={"Photo being viewed"}/>
        </div>
    )
}

export default PhotoViewer;

