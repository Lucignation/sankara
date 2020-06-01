import React from 'react';

import './StreamingDashboard.css';

const StreamingDashboard = props => {
    return(
        <div className="StreamingDashboard">
            <p><a href="/sreaming-home">Home</a></p>
            <p><a href="/streaming-events">Events</a></p>
            <p><a href="/streaming-reports">Reports</a></p>
            <p><a href="/go-live">Go Live</a></p>
        </div>
    );
};

export default StreamingDashboard;