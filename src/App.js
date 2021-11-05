import React from "react";
import * as Pages from ".";
import { BrowserRouter as Router, Route } from "react-router-dom";
export function App() {
  return (
    <Router>
      <Pages.NavBar />
      <div className="page-container">
        <Route path="/" exact component={Pages.Home}></Route>
        <Route path="/news" exact component={Pages.News}></Route>
        <Route path="/personal" exact component={Pages.Personal}></Route>
      </div>
    </Router>
  );
}
