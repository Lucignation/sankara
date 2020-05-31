import React from 'react';

import { NavLink } from 'react-router-dom';

//Import Unboxing Image
import Unbox from '../../public/unboxing.jpg';
import SetupImg from '../../public/setup.png';

import './Setup.css';

const Setup = () => {
    return(
        <div className="Unboxing">
            <div className="Unboxing__Img_Links">
                <NavLink to="/unboxing">
                    <img src={Unbox} alt="Unpacking Device" />
                </NavLink>
                <NavLink to="/setup" id="setup">
                    <img src={SetupImg} alt="Setting up configuration" />
                </NavLink>
                <NavLink to="/software-configuration">
                    <img src={Unbox} alt="Unpacking Device" />
                </NavLink>
            </div>

            <div className="Unboxing__Info">
                <h2>
                    Hardware Setup
                </h2>
                <p>
                    Plug in the Shuttle device to the power 
                </p>
                <p>
                    Connect the RJ45 cable to Camera and the other end of cable to 
                </p>
                <p>
                    Shuttle device and and all Cameras must be on the same
                </p>
                <p>
                    Be sure you have the controller setup properly on the Shuttle device to identify all Cameras present on the Network.
                </p>
            </div>
            <p className="Setup__Btn">
                <a href="/setup-next-step" className="Setup__Link">NEXT STEP</a>
            </p>
        </div>
    );
};

export default Setup;