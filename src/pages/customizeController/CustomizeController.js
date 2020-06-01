import React, { useState } from 'react';

//Importing the Controller image
import Controller from '../../public/problems.svg';

import './CustomizeController.css';

const CustomizeController = props => {


    //useState to manage the input onChange
    const [ controller, setController ] = useState({
        controllerID: '',
        controllerName: ''
    });

    const { controllerID, controllerName } = controller;

    //onChange function to help select each value
    const onChange = e => {
        setController({...controller, [e.target.name] : e.target.value});
    };

    //onCancel to reset the value in the form
    const onCancel = () =>{
        setController({
            controllerID: '',
            controllerName: ''
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(controller);
    }

    return(
        <div className="CustomizeController">
            <div className="CustomizeController__Info">
                <h2>Customize Controller</h2>
                <p>
                    Customize the controller to your choosing using the different parameters below. Settings will take effect after a reset
                </p>
                <form onSubmit={onSubmit} action="/camera-listing">
                    <label htmlFor="controllerID">Enter New Controller ID <span>?</span></label>
                    <input type="text" name="controllerID" placeholder="Controller ID" value={controllerID} onChange={onChange} onFocus required  />
                    <label htmlFor="controllerName">Enter Controller Name <span>?</span></label>
                    <input type="text" name="controllerName" placeholder="Controller Name" value={controllerName} onChange={onChange} required />
                    <button type="submit" className="proceed__Btn">PROCEED</button>
                    <button onClick={onCancel} className="cancel__Btn">CANCEL</button>
                </form>
            </div>
            <div className="CustomizeController__Img">
                <img src={Controller} alt="Customize Controller" />
            </div>
        </div>
    );
};

export default CustomizeController;