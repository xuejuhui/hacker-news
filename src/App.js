import React from "react";
import NewStories from "./components/BestStories/NewStories.jsx";
import BestStories from "./components/BestStories/BestStories.jsx";
import AskStories from "./components/BestStories/AskStories.jsx";
import JobStories from "./components/BestStories/JobStories.jsx";
import ShowStories from "./components/BestStories/ShowStories.jsx";
import StoryPage from "./components/BestStories/StoryPage.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={BestStories} />
          <Route exact path="/stories" component={NewStories} />
          <Route exact path="/story/:id" component={StoryPage} />
          <Route exact path="/ask" component={AskStories} />
          <Route exact path="/job" component={JobStories} />
          <Route exact path="/show" component={ShowStories} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
