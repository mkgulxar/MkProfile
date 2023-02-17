import "./App.css";
import Header from "./Pages/Header"
import Home from "./Pages/Home";


// import Textform from "./pages/Textform";

import { Switch, Redirect, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
 

        <Redirect to="/" />
      </Switch>
      
    </>
  );
}

export default App;
