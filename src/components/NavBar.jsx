import React from 'react';
import NavBarItem from './NavBarItem';
import '../style/NavBar.css';

const NavBar = ({ links }) => {
    const navBarElems = [];
    for (const [content, destination] of links) {
        navBarElems.push(<NavBarItem key={content + destination} content={content} destination={destination}/>);
    }

    return (
        <div className="NavBar">
            <ul>
                {navBarElems}
            </ul>
        </div>
    );
}

export default NavBar;