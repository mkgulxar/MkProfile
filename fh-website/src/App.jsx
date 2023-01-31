import React from "react";

import Top from "./page/Top"
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Service from "./page/Service";
import Footer from "./page/Footer";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
    <Top/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
