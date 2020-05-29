import React from 'react';

import './Home.css';

//Importing of the Landing Page
import LandingPage from '../../components/landingPage/Landing__Page';
import HotZone from '../../components/hotZone/HotZone';
import EmotionAnalysis from '../../components/emotionAnalysis/EmotionAnalysis';

const Home = props => {
    return(
        <div className="Home">
            <LandingPage />
            <HotZone />
            <EmotionAnalysis />
        </div>
    )
}

export default Home;