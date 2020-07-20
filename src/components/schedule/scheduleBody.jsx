import React from "react";
import { useMediaQuery } from "react-responsive";

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
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  let containerClass = "salad-container-schedule";
  if (!bigScreen) containerClass += "-tabs";

  return (
    <div className={containerClass}>
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
            <div key={time} className="row schedule-divider">
              <div className="schedule-text">
                <p>{time}</p>
              </div>
              <div className="col">
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleBody;
