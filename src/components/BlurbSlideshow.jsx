import React, { useEffect, useState } from 'react';
import '../style/BlurbSlideshow.css';

const BlurbSlideshow = ({ blurbs }) => {
    const numBlurbs = blurbs.length;

    //let [currentIdx, setCurrentIdx] = useState(Math.floor(Math.random() * Math.floor(numBlurbs)));
    let [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const updateInterval = setInterval(() => {
            setCurrentIdx(c => (c < numBlurbs - 1) ? c + 1 : 0);
        }, 10000);

        return () => clearInterval(updateInterval);
    }, [numBlurbs]);

    const handleUpdateIdx = (i) => {
        setCurrentIdx(i);
    }

    let blurbElems = blurbs.map((blurb, blurbIndex) => {
        let blurbDisplay = (blurbIndex === currentIdx) ? "block" : "none";
        return (<div key={"blurb-text-" + blurbIndex} className="BlurbSlideshow-blurb fade" style={{"fontSize": blurb["font-size"], "display": blurbDisplay}}>
            {blurb["text"]}
        </div>);
    });

    let blurbDots = [];
    for (let i = 0; i < numBlurbs; i++) {
        let realClassName = "BlurbSlideshow-dot";
        if (i === currentIdx) {
            realClassName += " active-dot";
        }

        blurbDots.push(<span key={"blurb-dot-" + i} className={realClassName} onClick={() => handleUpdateIdx(i)}></span>);
    }

    return (
        <div className="BlurbSlideshowHolder">
            <div className="BlurbSlideshow">
                {blurbElems}
            </div>
            <div className="BlurbSlideshowDots">
                {blurbDots}
            </div>
        </div>
    );
}

export default BlurbSlideshow;