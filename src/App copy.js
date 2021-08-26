import './App.css';
import Home from './pages/Home';
import Sidebar from "./components/Sidebar"
import "./index.css"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import Portafolio from './pages/Portafolio';
import Blogs from './pages/Blogs';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>

        <div className="appContent">
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route exact path="/portafolio">
              <Portafolio></Portafolio>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
