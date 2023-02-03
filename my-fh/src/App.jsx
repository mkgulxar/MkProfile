import './App.css';



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
      
       

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
