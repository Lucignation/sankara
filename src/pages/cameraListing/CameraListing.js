import React from 'react';

import cameraImg from '../../public/problems.svg';

import './CameraListing.css';

const CameraListing = props => {

    const Cameras = [
        {
            id: 1,
            camera: cameraImg ,
            cameraName: "Starlink Camera",
            cameraId: "6720WR"
        },
        {
            id: 2,
            camera: cameraImg ,
            cameraName: "Moovlink Camera",
            cameraId: "8716WR"
        },
        {
            id: 3,
            camera: cameraImg ,
            cameraName: "Geralink Camera",
            cameraId: "9320TY"
        },
        {
            id: 4,
            camera: cameraImg ,
            cameraName: "Nikklink Camera",
            cameraId: "5770KG"
        },
        {
            id: 5,
            camera: cameraImg,
            cameraName: "GTlink Camera",
            cameraId: "8717PD"
        },
        {
            id: 6,
            camera: cameraImg,
            cameraName: "Polink Camera",
            cameraId: "8945GH"
        }
    ];

    //Fetching the data from the backend
    const all__cameras = Cameras.map(camera => {
        return(
            <li key={camera.id} className="each__camera">
                <a href={`/cameras/${camera.cameraId}`}>
                    <img src={camera.camera} alt="found camera" />
                    <div>
                        <p className="camera__name"> {camera.cameraName} </p>
                        <p> ID: {camera.cameraId} </p>
                    </div>
                </a>
            </li>
        )
    })

    return(
        <div className="CameraListing">
            <div className="CameraListing__Heading">
                <h2>Found {Cameras.length} cameras on Controller ID: <span>092ERT11D</span></h2>
                <a href="/">REFRESH LIST</a>
            </div>
            <ul className="All__Camera">
                {all__cameras}
            </ul>
        </div>
    );
};

export default CameraListing;