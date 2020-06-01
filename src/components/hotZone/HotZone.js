import React from 'react';

import Mission from '../../public/mission.svg';

import './HotZone.css';

const HotZone = props => {
    return(
        <div className="HotZone" id="HotZone">
            <div className="HotZone__Info">
                <h1>
                    HotZone Detection
                </h1>
                <p>
                    Monitor Football traffic and Distribution, including people count, age
                    range detention and gender
                </p>
                <p className="HotZone__Btn">
                    <a href="/unboxing"> NEXT</a>
                </p>
            </div>
            <img src={Mission} alt="Hotzone Detection" />
        </div>
    )
}

export default HotZone;