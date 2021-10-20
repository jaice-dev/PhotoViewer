import React from "react";
import "./ImageSelector.css"

const ImageSelector = (props) => (
    <div className="ImageSelector">
    {
        props.imageUrls.map((url, index) => 
             <img key={url} 
                  onClick={() => {props.sendDataToParent(index);  }} 
                  className={index === props.selectedIndex ? "selected ImageSelectorPhoto" : "ImageSelectorPhoto"} 
                  src={url} 
                  alt=""
                  data-testid={index}
             />
        )
    }
    </div>
)

export default ImageSelector