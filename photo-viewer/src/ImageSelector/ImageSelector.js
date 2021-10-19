import React from "react";
import { imageUrls } from "./ImageUrls";
import "./ImageSelector.css"

const ImageSelector = () => {
    return (
        <div className={"ImageSelector"}>
            {
                imageUrls.map((image) => {
                    return <img className={"ImageSelectorPhoto"} src={image} alt={"Image selector picture"}/>
                })
            }
        </div>
    )
}

export default ImageSelector