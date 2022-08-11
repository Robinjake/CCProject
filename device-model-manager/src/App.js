import './App.css';
import Home from './Home';
import DeviceModelManager from './DeviceModelManager';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/devicemodelmanager" element={<DeviceModelManager/>}/>
        </Routes>
    </div>
  );
}

export default App;
