import React from 'react';

//Importing SVG
import Emotion from '../../public/emotion.svg';

import './EmotionAnalysis.css';

const EmotionAnalysis = props =>{
    return(
        <div className="Emotion">
            <div className="Emotion__Info">
                <h1>Emotion Analysis</h1>
                <p>
                    Gain deeper insights and understanding of your customers, with the ability to measure their moods
                </p>
                <p className="Emotion__Btn">
                    <a href="/setup"> GO TO SETUP </a>
                </p>
            </div>
            <img src={Emotion} alt="Emotion Analysis" />
        </div>
    )
}

export default EmotionAnalysis;