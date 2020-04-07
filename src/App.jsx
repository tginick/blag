import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeButton from './components/HomeButton';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import PortfolioContent from './components/PortfolioContent';
import BlagContent from './components/BlagContent';
import ContactContent from './components/ContactContent';
import './style/App.css';

const App = () => {
    const navBarDests = [
        ["Main", "/", <MainContent />],
        ["Portfolio", "/portfolio", <PortfolioContent />],
        ["Blog", "/blag", <BlagContent />],
        ["Contact", "/contactme", <ContactContent />]
    ];

    return (
        <div className="App">
            <div className="App-Header">
                <HomeButton />
                <NavBar links={navBarDests}/>
            </div>

            <div className="App-Content">
                <Switch>
                    {/* we must reverse because the catchall arm must appear last */
                    navBarDests.slice(0).reverse().map(([_name, path, component]) => <Route key={path} path={path}>{component}</Route>) 
                    }
                </Switch>
            </div>
        </div>
    );
};

export default App;
