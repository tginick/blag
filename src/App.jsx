import React from 'react';
import logo from './logo.svg';
import HomeButton from './components/HomeButton';
import NavBar from './components/NavBar';
import './style/App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
*/

const App = () => {
  const navBarDests = {
    "Main": "/",
    "Portfolio": "/portfolio",
    "Blog": "/blag"
  };

  return (
    <div className="App">
      <HomeButton />
      <NavBar links={navBarDests}/>
    </div>
  );
};

export default App;
