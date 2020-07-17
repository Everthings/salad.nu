import React, { Component } from "react";
import ScheduleCard from "./scheduleCard.jsx";
import ScheduleBody from "./scheduleBody.jsx";

class Schedule extends Component {
  render() {
    return (
      <div className="salad-container-outer">
        <div className="salad-container-inner">
          <ScheduleBody />
        </div>
      </div>
    );
  }
}

export default Schedule;
