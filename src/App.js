import React from "react";
import Home from "./Components/Pages/Home";
import "../src/Components/css/stylel.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
