import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../Images/logo.png";
import Activities from "../Activities/Activities";

const Main = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

    
  return (
    <div className="main-container">
      <div className="cart-container">
        <div className="top">
          <nav className="menu">
            <img src={logo} alt="" />
            <h1>PRE-READING-ACTIVITIES</h1>
          </nav>
        </div>
        <div className="bottom">
          {/* <h4>Select Today's Routine</h4> */}
            {
                // activities.map((activity) => console.log(activity))
            }

          {activities.map((activity) => (
            <Activities activity={activity} key={activity.id}></Activities>
          ))}
        </div>
      </div>
      <div className="sidebar-container">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Main;
