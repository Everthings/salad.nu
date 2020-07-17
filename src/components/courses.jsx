import React, { Component } from "react";
import CourseCard from "./courseCard";

class Courses extends Component {
  render() {
    return (
      <div className="salad-container-outer">
        <div className="salad-container-inner">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    );
  }
}

export default Courses;
