import "./App.css";
import Header from "./Pages/Header"
import Home from "./Pages/Home";
import Banner from "./Pages/Banner";




import { Switch, Redirect, Route } from 'react-router-dom'
import Slider from "./Pages/Slider";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="Banner" component={Banner} />
        <Route exact path="Slider" component={Slider} />
 

        <Redirect to="/" />
      </Switch>
      
    </>
  );
}

export default App;
