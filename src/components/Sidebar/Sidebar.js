import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import image from '../Images/bikash.jpg';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import AddBreak from '../AddBreak/AddBreak';

const Sidebar = (props) => {
    const { addToTime, btnTime, activities } = props;

    const [btn, setBtn] = useState(0);
    
    const addBreakBtn = (data) => {
        const newValue = data;
        setBtn(newValue);
    }

    return (
        <div className='sidebar'>
            <div className="profile">
                <img src={image} alt="" />
                <div>
                    <p className='profile-name'>Bikash Chandra Dey</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> <small>Cox's Bazar, Bangladesh</small></p>
                </div>
            </div>
            <div className='weight-height'>
                <div>
                    <p className='bold'>55 <small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='bold'>5'5 <small>in</small></p>
                    <p>Height</p>
                </div>
                <div>
                    <p className='bold'>24 <small>yrs</small></p>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <AddBreak activities={activities} addBreakBtn={addBreakBtn}></AddBreak>

            </div>
            <ExerciseDetails addBreakBtn={addBreakBtn} btn={btn} addToTime={addToTime} btnTime={btnTime}></ExerciseDetails>
        </div>
    );
};

export default Sidebar;