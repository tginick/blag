import React from 'react';
import { Link } from 'react-router-dom';
import '../style/LinkButton.css';

const LinkButton = ({ label, destination }) => {
    return (
        <Link to={destination} className="LinkButton">
            <div className="LinkButtonContent">
                {label}
            </div>
        </Link>
    );
};

export default LinkButton;