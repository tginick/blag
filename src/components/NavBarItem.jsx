import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBarItem.css';

const NavBarItem = (props) => {
    return (
        <li className="NavBarItem">
            <div className="NavBarItemContent">
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.destination}>
                    {props.content}
                </Link>
            </div>
        </li>
    )
}

export default NavBarItem;