import logo from './logo.svg';
import './App.css';
import PhotoViewer from "./PhotoViewer/PhotoViewer";
import ImageSelector from "./ImageSelector/ImageSelector";

const App = () => {
  return (
      <div className={"App"}>
        <h1>React Photo Viewer</h1>
          <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"} />
          <ImageSelector />
      </div>
  )
}

export default App;
