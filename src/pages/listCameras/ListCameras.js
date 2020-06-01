import React from 'react';

import './ListCameras.css';

import CamerasListing from '../cameraListing/CameraListing';

const ListCameras = props =>{
    return(
        <div>
            <CamerasListing />

            <div className="ListCameras">
                <button className="camera__proceed_Btn">PROCEED</button>
                <button className="cutomize__camera__Btn">CUSTOMIZE CAMERAS</button>
            </div>
        </div>
    );
};

export default ListCameras;