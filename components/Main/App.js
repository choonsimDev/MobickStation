// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/index.js"; // 경로 수정 필요할 수 있음
import CommunityMain from "./Community/CommunityMain"; // 경로 수정 필요할 수 있음

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/community" component={CommunityMain} />
      </Switch>
    </Router>
  );
};

export default App;
