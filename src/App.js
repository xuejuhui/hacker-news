import React from "react";
import Stories from "./components/BestStories/Stories.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Stories} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
