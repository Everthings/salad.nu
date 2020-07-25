import React from "react";
import styled from "styled-components";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import CampusMap from "./map/campusMap";

const SaladContainer = styled.div`
  background-color: #dcf0da;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.75rem solid #dcf0da;
  border-radius: 1rem;
`;

const BodyLarge = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4 ml-3 mr-3">
        <div className="col-3">
          <SaladContainer>
            <Courses />
            <CampusMap />
          </SaladContainer>
        </div>
        <div className="col-9">
          <SaladContainer>
            <Schedule />
          </SaladContainer>
        </div>
      </div>
    </div>
  );
};

export default BodyLarge;
