import React from 'react';

import { NavLink } from 'react-router-dom';

//Import Unboxing Image
import Unbox from '../../public/unboxing.jpg';
import Setup from '../../public/setup.png';

import './Unboxing.css';

const Unboxing = () => {
    return(
        <div className="Unboxing">
            <div className="Unboxing__Img_Links">
                <NavLink to="/unboxing" id="unboxing">
                    <img src={Unbox} alt="Unpacking Device" />
                </NavLink>
                <NavLink to="/setup">
                    <img src={Setup} alt="Setting up configuration" />
                </NavLink>
                <NavLink to="/software-configuration">
                    <img src={Unbox} alt="Unpacking Device" />
                </NavLink>
            </div>

            <div className="Unboxing__Info">
                <h2>
                    Unpack your device box and ensure you have the following items
                </h2>
                <p>
                <i class="fas fa-caret-right"></i>Camera-AXIS M2026-LE BLACK | Only POE switches are used to power this type of 
                </p>
                <p>
                <i class="fas fa-caret-right"></i>Network cable (RJ45) to connect camera and shuttle device in the same
                </p>
                <p>
                <i class="fas fa-caret-right"></i>Shuttle device and a POE switch
                </p>
            </div>
            <p className="Setup__Btn">
                <a href="/setup-next-step" className="Setup__Link">NEXT STEP</a>
            </p>
        </div>
    );
};

export default Unboxing;