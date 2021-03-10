import logo from './logo.svg';
import './App.css';
import React from "react";
import Nav from "../src/components/Nav/nav"

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
