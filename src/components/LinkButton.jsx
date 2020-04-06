import React from 'react';
import '../style/LinkButton.css';

const LinkButton = ({ label, destination }) => {
    const onLinkButtonClick = (event) => {
        event.preventDefault();
        window.open(destination, "_blank", "noopener,noreferrer");
    }

    return (
        <button onClick={onLinkButtonClick} className="LinkButton">{label}</button>
    );
};

export default LinkButton;
