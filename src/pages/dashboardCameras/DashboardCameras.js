import React from 'react';

import Network from '../../public/problems.svg';

// import './DashboardCameras.css';

import StreamingDashboard from '../../components/streamingDashboard/StreamingDashboard';
import ListCameras from '../../pages/cameraListing/CameraListing';

const DashboardCameras = props => {
    return(
        <div className="GoLive">
            <div className="GoLive__Left">
                <StreamingDashboard />
            </div>
            <div className="GoLive__Right">
                <h1>Start Streaming</h1>
                <div className="Streaming__Info">
                    <ListCameras />
                </div>
                <p>
                    <a href="/start-livestream">START LIVESTREAM</a>
                </p>
            </div>
        </div>
    );
};

export default DashboardCameras;