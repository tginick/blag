import React from 'react';
import BlurbSlideshow from './BlurbSlideshow';
import Blurbs from '../blurbs/Blurbs';
import '../style/MainContent.css';
import LinkButton from './LinkButton';

const MainContent = (props) => {
    // TODO: see if we can pull in portfolio and contact links into here...
    return (
        <div className="MainContent">
            <div style={{"fontSize": 24 }}>I am...</div>
            <BlurbSlideshow blurbs={Blurbs} />
            <br />
            <p>Come check out my work:</p>
            <LinkButton label="Portfolio" destination="/portfolio" />
            <LinkButton label="Contact" destination="/contactme" />
        </div>

    );
}

export default MainContent;