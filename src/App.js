import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
