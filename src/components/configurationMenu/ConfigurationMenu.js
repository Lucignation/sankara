import React from 'react';
import { NavLink } from 'react-router-dom';

import './ConfigurationMenu.css';

const ConfigurationMenu = props => {
    return(
        <div className="ConfigurationMenu">
            <NavLink to="/unboxing" className="top__Menu">
                <i className="fas fa-box-open"></i> 
                <p>UNBOXING</p>
            </NavLink>
            <NavLink to="/setup" className="top__Menu">
                <i className="fas fa-sliders-h"></i>
                <p>HARDWARE SETUP</p>
            </NavLink>
            <NavLink to="/software-configuration" className="top__Menu">
                <i className="fas fa-laptop"></i>
                <p> SOFTWARE CONFIGURATION </p>
            </NavLink>
        </div>
    )
}

export default ConfigurationMenu;