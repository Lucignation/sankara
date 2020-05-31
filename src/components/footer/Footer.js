import React from 'react';
import { NavLink } from 'react-router-dom'

import './Footer.css';

const Footer = () =>{

    const date = new Date().getFullYear();
    return(
        <div className="Footer">
            <div className="Footer__Info">
                <p> &copy; {date}</p>
                <div className="Footer__Products">
                    <NavLink to="/learn-about-product">
                        Learn about Product
                    </NavLink>
                    <span> - </span>
                    <NavLink to="/more-products">
                        More Products
                    </NavLink>
                    <span> - </span>
                    <NavLink to="/main-product">
                        Go to Main Product
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;