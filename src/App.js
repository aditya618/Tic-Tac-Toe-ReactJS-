import React from "react";
import Home from "./components/Home/Home";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Playground from "./components/Playground/Playground";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/playground" component={Playground} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
