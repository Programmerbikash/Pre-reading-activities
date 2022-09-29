import React from "react";
import "./Activities.css";

const Activities = (props) => {
  const { activity} = props;
    const { picture, time, title } = activity;
    
    const addToTime = time => {
        console.log(time);
    }
    
  return (
    <div className="books">
      <img src={picture} alt="" />
      <h2>{title}</h2>
      <h4>
        Time required: {time} <small>minutes</small>
      </h4>
      <button onClick={()=>addToTime(time)}  className="btn-books">Add To List</button>
    </div>
  );
};

export default Activities;
