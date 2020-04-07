import React from 'react';
import '../style/ExternalLinkButton.css';

const ExternalLinkButton = ({ label, destination }) => {
    const onExternalLinkButtonClick = (event) => {
        event.preventDefault();
        window.open(destination, "_blank", "noopener,noreferrer");
    }

    return (
        <button onClick={onExternalLinkButtonClick} className="ExternalLinkButton">{label}</button>
    );
};

export default ExternalLinkButton;
