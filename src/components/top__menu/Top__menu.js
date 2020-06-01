import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Top__menu.css';

import { loadUser } from '../../actions/logActions';

const Top__menu = props =>  {
    useEffect(() =>{
        loadUser();
    
        //eslint-disable-next-line
    }, [])
    
    return(
        <div className="Top__Nav" id="Top__Navigation">
            <div></div>
            <div className="Top__Nav_Info">
                <p className="user__name"> {props.user} </p>
                <p>EN</p>
                <a href="#HotZone"><i className="fas fa-th"></i></a>
            </div>
        </div>
    );
}

const mapStatToProps = state => ({
    user: state.log.user
})

export default connect(mapStatToProps)(Top__menu);