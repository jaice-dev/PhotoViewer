import logo from './logo.svg';
import './App.css';
import PhotoViewer from "./PhotoViewer/PhotoViewer";

const App = () => {
  return (
      <div className={"App"}>
        <h1>React Photo Viewer</h1>
        <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"}/>
      </div>
  )
}

export default App;
