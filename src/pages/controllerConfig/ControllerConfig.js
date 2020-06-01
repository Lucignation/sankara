import React from 'react';
import Controller from '../../public/problems.svg';

import './ControllerConfig.css';

const ControllerConfig = props => {
    return(
        <div className="Controller">
            <div className="Controller__Info">
                <h2>
                    Found a controller with the ID: <span>092ERT11D</span>
                </h2>
                <p>To proceed using this controller and its settings, click on the proceed button below or you can choose to customise your controller</p>
                <a href="/customize-controller" className="Controller__Link">PROCEED</a>
                <a href="/customize-settings" className="Customize__Link">CUSTOMIZE SETTINGS</a>
            </div>
            <div>
                <img src={Controller} alt="Configuration Controller" />
            </div>
        </div>
    );
}

export default ControllerConfig;