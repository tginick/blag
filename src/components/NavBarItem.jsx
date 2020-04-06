import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBarItem.css';

const NavBarItem = (props) => {
    return (
        <li className="NavBarItem">
            <div className="NavBarItemContent">
                <Link to={props.destination} className="NavBarLink">
                    {props.content}
                </Link>
            </div>
        </li>
    )
}

export default NavBarItem;