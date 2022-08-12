import Home from './Home';
import DeviceModelManager from './DeviceModelManager';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import DeviceDetails from './DeviceDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
          <Route path="/devicemodelmanager">
            <DeviceModelManager/>
            </Route>
            <Route path="/device/:id">
            <DeviceDetails/>
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
