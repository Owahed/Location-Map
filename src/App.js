import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Map from './Components/Map';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/map">
            <Map/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
