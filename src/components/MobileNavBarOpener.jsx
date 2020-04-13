import React from 'react';
import '../style/MobileNavBarOpener.css';

const MobileNavBarOpener = ({ onNavBarToggle }) => {
    const onClicked = (event) => {
        onNavBarToggle();
    }

    return (
        <div className="MobileNavBarOpener" onClick={onClicked}>
            +
        </div>
    );
};

export default MobileNavBarOpener;