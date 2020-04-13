import React from 'react';
import NavBarItem from './NavBarItem';
import '../style/NavBar.css';

const NavBar = ({ links, isVisible }) => {
    const navBarElems = [];
    for (const [content, destination] of links) {
        navBarElems.push(<NavBarItem key={content + destination} content={content} destination={destination}/>);
    }

    let navBarClass = "NavBar ";
    if (isVisible) {
        navBarClass += "active";
    }

    return (
        <div className={navBarClass}>
            <ul>
                {navBarElems}
            </ul>
        </div>
    );
}

export default NavBar;