import React from 'react';
import '../style/HomeButton.css'

const HomeButton = (props) => {
    const onHomeButtonClicked = () => {
        console.log("Going home!");
    };

    return (
        <div className="HomeButton" onClick={onHomeButtonClicked}>
            <h1>Nicholas Wong</h1>
        </div>
    );
}
    

export default HomeButton;