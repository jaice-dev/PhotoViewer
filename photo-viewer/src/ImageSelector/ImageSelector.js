import React, {useState} from "react";
import { imageUrls } from "./ImageUrls";
import "./ImageSelector.css"

const ImageSelector = (props) => {
    
    return (
        <div className={"ImageSelector"}>
            {
                imageUrls.map((image) => {
                    return <img onClick={() => props.sendDataToParent(image)} className={"ImageSelectorPhoto"} src={image} alt={"Image selector picture"}/>
                })
            }
        </div>
    )
}

export default ImageSelector