import React from 'react';
import { useState } from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './AddBreak.css';

const AddBreak = (props) => {
    const { activities, time, addBreakBtn } = props;
    
    
    return (
        <div>
            <div className="addBreak">
            <p>Add A Break</p>
            <div className="btn-add">
                <button onClick={()=> addBreakBtn(15)} className='btn'>15s</button>
                <button onClick={()=> addBreakBtn(20)} className='btn'>20s</button>
                <button onClick={()=> addBreakBtn(30)} className='btn'>30s</button>
                <button onClick={()=> addBreakBtn(40)} className='btn'>40s</button>
                <button onClick={()=> addBreakBtn(70)} className='btn'>70s</button>
            </div>
        </div>
        <div className="exercise">
               {/* <ExerciseDetails addBreakBtn={addBreakBtn}></ExerciseDetails>  */}
        </div>
        </div>
    );
};

export default AddBreak;