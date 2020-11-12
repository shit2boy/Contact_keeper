import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import ContactState from "./Context/Contact/ContactState";

function App() {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navigation />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
