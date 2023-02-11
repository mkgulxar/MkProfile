import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Socialmesia from "./pages/Socialmesia";
import Service from "./pages/Service";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Team from "./pages/Team";
import Text from "./pages/Text";
import image from "./pages/image";
import { Email } from "./pages/Email";

// import Textform from "./pages/Textform";

import { Switch, Redirect, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Socialmesia" component={Socialmesia} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Text" component={Text} />
        <Route exact path="/image" component={image} />
        <Route exact path="/Email" component={Email} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
