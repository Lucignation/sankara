import React from 'react';

import Network from '../../public/problems.svg';

import './GoLive.css';

import StreamingDashboard from '../../components/streamingDashboard/StreamingDashboard';

const GoLive = props => {
    return(
        <div className="GoLive">
            <div className="GoLive__Left">
                <StreamingDashboard />
            </div>
            <div className="GoLive__Right">
                <h1>Start Streaming</h1>
                <div className="Streaming__Info">
                    <img src={Network} alt="Start Streaming" />
                    <p>
                        You can start immediately live streaming the boardcast from your cameras and capture your traffic data
                    </p>
                    <p className="select__camera">
                        <a href="/select-cameras">Select Cameras</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GoLive;