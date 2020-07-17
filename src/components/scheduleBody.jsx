import React from "react";

const times = [
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
];

const ScheduleBody = () => {
  return (
    <div className="container schedule-body">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">M</div>
        <div className="col-2">Tu</div>
        <div className="col-2">W</div>
        <div className="col-2">Th</div>
        <div className="col-2">F</div>
      </div>
      {times.map((time) => {
        return (
          <div key={time} className="row">
            <p>Lines Here</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleBody;
