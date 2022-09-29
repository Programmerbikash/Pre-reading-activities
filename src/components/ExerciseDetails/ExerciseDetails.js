import React from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = (props) => {
    // const { addToTime, activity } = props;
    // const { time } = activity;
    return (
        <div>
            <h3>Exercise Details</h3>
            <div className="box">
                <div className='box-time'>
                    <p>Exercise Times</p>
                    <p className='color'>minutes</p>
                </div>
                <div className='box-time'>
                    <p>Break Times</p>
                    <p className='color'>minutes</p>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;