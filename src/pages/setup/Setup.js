import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Setup.css';

//Importing the Configuration Menu from the component folder
import ConfigurationMenu from '../../components/configurationMenu/ConfigurationMenu';

//Import Unboxing from the component folder
import SetupComponent from '../../components/setup/Setup';

const Setup = props => {
    return(
        <div className="Configuration">
            <div className="Left__Info">
                <ConfigurationMenu />
            </div>
            <div className="Right__Info">
                <Switch>
                    <Route path={"/"} component={SetupComponent} />
                </Switch>
            </div>

        </div>
    )
}

export default Setup;