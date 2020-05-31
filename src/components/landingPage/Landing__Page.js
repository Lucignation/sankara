import React from 'react';

import './Landing__Page.css';

//import of the first SVG
import UI from '../../public/ui.svg';

const LandingPage = props => {
    return(
        <div className="LandingPage">
            <div className="LandingPage__Main">
                <div className="GetStarted__Info">
                    <h1>Hello there,</h1>
                    <h3>Easy Plugin &amp; Play Configuration and Setup</h3>
                    <p>
                        Let's help you get started and easily set up your devices, so you can start creating 
                        events and monitoring sessions
                    </p>
                    <button className="getStarted__btn">Get Started</button>
                </div>
                <img src={UI} alt="Getting Started UI" />
            </div>
            <p className="Scroll">
                <a href="#hotZone"><span className="Scroll__Icon">SCROLL TO READ MORE</span>   <i className="fas fa-arrow-down"></i></a>
            </p>
        </div>
    )
}

export default LandingPage;