import React from 'react';
import '../style/HomeButton.css'

const HomeButton = (props) => {
    const onHomeButtonClicked = () => {
        console.log("Going home!");
    };

    return (
        <div className="HomeButton">
            <h1 onClick={onHomeButtonClicked}>Nicholas Wong</h1>
        </div>
    );
}

export default HomeButton;