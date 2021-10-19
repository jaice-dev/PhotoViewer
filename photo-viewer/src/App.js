import './App.css';
import PhotoViewer from "./PhotoViewer/PhotoViewer";
import ImageSelector from "./ImageSelector/ImageSelector";
import {useState} from "react";

const App = () => {

    const [imgUrl, setImgUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

    const sendDataToParent = (index) => {
        setImgUrl(index)
    }

    return (
        <div className="App">
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={imgUrl} />
            <h2>Select your photo</h2>
            <ImageSelector sendDataToParent={sendDataToParent}/>
        </div>
  )
}

export default App;
