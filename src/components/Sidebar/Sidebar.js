import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import image from '../Images/bikash.jpg';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="profile">
                <img src={image} alt="" />
                <div>
                    <p className='profile-name'>Bikash Chandra Dey</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> <small>Cox's Bazar, Bangladesh</small></p>
                </div>
            </div>
            <div>
                <p>Weight: </p>
                <p>Height: </p>
                <p>Age: </p>
            </div>
        </div>
    );
};

export default Sidebar;