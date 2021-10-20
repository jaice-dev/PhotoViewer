import React, {useState} from "react";
import { imageUrls } from "./ImageUrls";
import "./ImageSelector.css"

const ImageSelector = (props) => {
    
    const [selected, setSelected] = useState()
    
    return (
        <div className={"ImageSelector"}>
        {
            imageUrls.map((image, index) => {
                return <img 
                    onClick={() => { props.sendDataToParent(image); setSelected(index); }}
                    className={index === selected ? "selected ImageSelectorPhoto" : "ImageSelectorPhoto"} 
                    src={image} 
                    alt={"Image selector picture"}/>
            })
        }
        </div>
)}



export default ImageSelector