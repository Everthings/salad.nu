import React from "react";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import CampusMap from "./courses/campusMap";

const BodyLarge = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4 ml-3 mr-3">
        <div className="col-3">
          <div className="salad-container-outer">
            <Courses />
            <CampusMap />
          </div>
        </div>
        <div className="col-9">
          <div className="salad-container-outer">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLarge;
