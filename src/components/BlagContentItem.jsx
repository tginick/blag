import React from 'react';

const BlagContentItem = ({ title, timestamp }) => {
    return <div className="BlagContentItem">
        <b>{timestamp}</b> - {title}
    </div>
};

export default BlagContentItem;