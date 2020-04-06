import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeButton from './components/HomeButton';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import PortfolioContent from './components/PortfolioContent';
import BlagContent from './components/BlagContent';
import ContactContent from './components/ContactContent';
import './style/App.css';

/*
import logo from './logo.svg';

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
        "Blog": "/blag",
        "Contact": "/contactme"
    };

    return (
        <div className="App">
            <div className="App-Header">
                <HomeButton />
                <NavBar links={navBarDests}/>
            </div>

            <div className="App-Content">
                <Switch>
                    <Route path="/blag">
                        <BlagContent />
                    </Route>
                    <Route path="/portfolio">
                        <PortfolioContent />
                    </Route>
                    <Route path="/contactme">
                        <ContactContent />
                    </Route>
                    <Route path="/">
                        <MainContent />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
