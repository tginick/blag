import React from 'react';
import ExternalLinkButton from './ExternalLinkButton';

const PortfolioContent = (props) => {
    return (
        <div className="PortfolioContent Basic-Content">
            <h2>Currently under construction. Stay tuned!</h2>
            <p>For now, you can find my projects on Github.</p>
            <ExternalLinkButton label="Github" destination="https://github.com/tginick" />

        </div>
    );
}

export default PortfolioContent;