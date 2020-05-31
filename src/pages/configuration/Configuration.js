import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Configuration.css';

//Importing the Configuration Menu from the component folder
import ConfigurationMenu from '../../components/configurationMenu/ConfigurationMenu';

//Import Unboxing from the component folder
import ConfigurationComponent from '../../components/configuration/Configuration';

const Configuration = props => {
    return(
        <div className="Configuration">
            <div className="Left__Info">
                <ConfigurationMenu />
            </div>
            <div className="Right__Info">
                <Switch>
                    <Route path={"/"} component={ConfigurationComponent} />
                </Switch>
            </div>

        </div>
    )
}

export default Configuration;