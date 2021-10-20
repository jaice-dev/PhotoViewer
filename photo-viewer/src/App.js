import './App.css';
import PhotoViewer from "./PhotoViewer/PhotoViewer";
import ImageSelector from "./ImageSelector/ImageSelector";
import {useState} from "react";
import { imageUrls } from "./ImageSelector/ImageUrls";

const App = () => {

    const [imgIndex, setImgIndex] = useState(0);

    const sendDataToParent = (index) => {
        setImgIndex(index)
    }

    return (
        <div className="App">
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={imageUrls[imgIndex]} />
            <h2>Select your photo</h2>
            <ImageSelector sendDataToParent={sendDataToParent} selectedIndex={imgIndex} imageUrls={imageUrls}/>
        </div>
  )
}

export default App;
