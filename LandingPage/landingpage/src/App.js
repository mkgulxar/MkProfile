import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Banner from "./Pages/Banner";
import Slider from "./Pages/Slider";
import ImageBox from "./Pages/ImageBox";




import { Switch, Redirect, Route } from 'react-router-dom'
import Banner01 from "./Pages/Banner01";



function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="Banner" component={Banner} />
        <Route exact path="Slider" component={Slider} />
        <Route exact path="ImageBox" component={ImageBox} />
        <Route exact path="Banner01" component={Banner01} />
 

        <Redirect to="/" />
      </Switch>
      
    </>
  );
}

export default App;
