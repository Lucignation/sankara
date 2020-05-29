import React from 'react';

import './Home.css';

//Importing of the Landing Page
import LandingPage from '../../components/landingPage/Landing__Page';

const Home = props => {
    return(
        <div className="Home">
            <LandingPage />
        </div>
    )
}

export default Home;