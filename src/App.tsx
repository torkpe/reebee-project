import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import Search from "./screens/Search/Search";
import Show from "./screens/Show/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <Header  />
        <Route exact path="/" component={Home} />
        <Route path="/shows/:id" component={Show} />
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
