import React from "react";
import NewStories from "./components/BestStories/NewStories.jsx";
import BestStories from "./components/BestStories/BestStories.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/stories" component={NewStories} />
          <Route exact path="/" component={BestStories} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
