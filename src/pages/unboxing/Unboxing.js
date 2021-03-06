import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Unboxing.css';

//Importing the Configuration Menu from the component folder
import ConfigurationMenu from '../../components/configurationMenu/ConfigurationMenu';

//Import Unboxing from the component folder
import UnboxingComponent from '../../components/unBoxing/Unboxing'

const Unboxing = props => {
    return(
        <div className="Configuration">
            <div className="Left__Info">
                <ConfigurationMenu />
            </div>
            <div className="Right__Info">
                <Switch>
                    <Route path={"/"} component={UnboxingComponent} />
                </Switch>
            </div>

        </div>
    )
}

export default Unboxing;