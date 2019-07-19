import React from "react";
import Stories from "./components/BestStories/Stories.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/stories" component={Stories} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
