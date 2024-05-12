import React from 'react';
import navCSS from './../Nav/Nav.module.css';

import logo from './../../assets/logo.png';

function Nav() {
    return (
        <>
            <div className={navCSS.nav}>
                <div className={navCSS.log}>
                    <img src={logo} alt='Logo' />
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <i className='ri-bar-chart-horizontal-line'></i>
            </div>
        </>
    )
}

export default Nav;