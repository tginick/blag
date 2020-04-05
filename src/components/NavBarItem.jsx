import React from 'react';
import '../style/NavBarItem.css';

const NavBarItem = (props) => {
    const onNavBarItemClicked = () => {
        console.log("Clicked nav bar item. Navigating to ", props.destination);
    };

    return (
        <li className="NavBarItem" onClick={onNavBarItemClicked}>
            <div className="NavBarItemContent">
                {props.content}
            </div>
        </li>
    )
}

export default NavBarItem;