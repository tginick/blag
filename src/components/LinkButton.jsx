import React from 'react';
import '../style/LinkButton.css';

const LinkButton = ({ label, destination }) => {
    const onLinkButtonClick = (event) => {
        event.preventDefault();
        window.open(destination, "_blank");
    }

    return (
        <button onClick={onLinkButtonClick} className="LinkButton">{label}</button>
    );
};

export default LinkButton;
