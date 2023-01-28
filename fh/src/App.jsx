import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
        <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/service" component={Services}/>
<Route exact path="/contact" component={Contact}/>
<Redirect to="/" />

        </Switch>
        </>
    )
}
export default App