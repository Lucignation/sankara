import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import './CameraListing.css';

import { allCameras } from '../../actions/logActions';

const CameraListing = props => {


    useEffect(() =>{
        allCameras();

        //eslint-disable-next-line
    }, [])

    console.log(props.cameras);

    //Fetching the data from the backend
    const all__cameras = props.cameras.map(camera => {
        return(
            <li key={parseInt(camera.id)} className="each__camera">
                <a href={(`/cameras/${camera.cameraId}`)}>
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
                <h2>Found {props.cameras.length} cameras on Controller ID: <span>092ERT11D</span></h2>
                <a href="/"> <i class="fas fa-redo-alt"></i>  REFRESH LIST</a>
            </div>
            <ul className="All__Camera">
                {all__cameras}
            </ul>
        </div>
    );
};

const mapStatToProps = state => ({
    cameras: state.log.cameras,
    loading: state.log.loading
});

export default connect(mapStatToProps)(CameraListing);