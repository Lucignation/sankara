import React from 'react';

import './Top__menu.css';

const Top__menu = props =>  {
    return(
        <div className="Top__Nav">
            <div></div>
            <div className="Top__Nav_Info">
                <p>GERALD OLUMIDE</p>
                <p>EN</p>
                <a href="#HotZone"><i class="fas fa-th"></i></a>
            </div>
        </div>
    );
}

export default Top__menu;