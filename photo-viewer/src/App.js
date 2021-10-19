import logo from './logo.svg';
import './App.css';
import PhotoViewer from "./PhotoViewer/PhotoViewer";

const App = () => {
  return (
      <div className={"App"}>
        <h1>React Photo Viewer</h1>
        <PhotoViewer />
      </div>
  )
}

export default App;
