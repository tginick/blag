import React from 'react';
import '../style/NavBarItem.css';

const NavBarItem = (props) => {
    const onNavBarItemClicked = () => {
        console.log("Clicked nav bar item. Navigating to ", props.destination);
    };

    return (
        <li className="NavBarItem">
            <div className="NavBarItemContent" onClick={onNavBarItemClicked}>
                {props.content}
            </div>
        </li>
    )
}

export default NavBarItem;