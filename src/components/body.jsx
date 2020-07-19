import React from "react";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";

const Body = () => {
  return (
    <div className="container-fluid">
      <div className="row ml-3 mr-3">
        <div className="col-3">
          <Courses />
        </div>
        <div className="col-9">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Body;
