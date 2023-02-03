import logo from './logo.svg';
import './App.css';

import ImageComponent from './pages/imageTest/ImageComponent';
const pic= "https://i.pinimg.com/736x/c5/61/ab/c561ab3d23014eb1499065962a8fa449.jpg"


function App() {
  return (
    <div className="App">
      <header className="App-header">
   {/* <img src='https://i.pinimg.com/736x/c5/61/ab/c561ab3d23014eb1499065962a8fa449.jpg'/> */}
      <ImageComponent src={pic} alt="image description" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
