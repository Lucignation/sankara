import React from 'react';

import { NavLink } from 'react-router-dom';

//Import Unboxing Image
import Unbox from '../../public/unboxing.jpg';
import SetupImg from '../../public/setup.png';

import './Configuration.css';

const Configuration = () => {
    return(
        <div className="Unboxing">
            <div className="Unboxing__Img_Links">
                <NavLink to="/unboxing">
                    <img src={Unbox} alt="Unpacking Device" />
                </NavLink>
                <NavLink to="/setup">
                    <img src={SetupImg} alt="Setting up configuration" />
                </NavLink>
                <NavLink to="/software-configuration" id="configuration">
                    <img src={Unbox} alt="Unpacking Device" />
                </NavLink>
            </div>

            <div className="Unboxing__Info">
                <h2>
                    Software Configuration
                </h2>
                <p>
                    Plug in the Shuttle device to the power 
                </p>
                <p>
                    Network cable (RJ45) to connect camera and shuttle device in the same
                </p>
                <p>
                    Shuttle device and a POE switch
                </p>
            </div>
            <p className="Configuration__Btn">
                <a href="/setup-next-step" className="Setup__Link">COMTINUE TO SETUP</a>
                <a href="/setup-next-step" className="Setup__Link Setup__Link_Secondary">SECONDARY</a>
            </p>
        </div>
    );
};

export default Configuration;