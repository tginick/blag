import React from 'react';
import BlurbSlideshow from './BlurbSlideshow';
import Blurbs from '../blurbs/Blurbs';
import '../style/MainContent.css';

const MainContent = (props) => {
    return (
        <div className="MainContent">
            <BlurbSlideshow blurbs={Blurbs} />
        </div>

    );
}

export default MainContent;