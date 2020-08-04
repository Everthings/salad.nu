import React from "react";
import styled from "styled-components";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import CampusMap from "./map/campusMap";

const BodyContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  height: 100%;
  flex: 1;
  min-height: 0;
`;

const SaladContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.containerBorder}`};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${({ theme }) => `0.25rem solid ${theme.colors.containerBorder}`};
  border-radius: 1rem;
  height: 100%;
`;

const BodyLarge = () => {
  return (
    <BodyContainer>
      <div className="row ml-3 mr-3 h-100">
        <div className="col-3 h-100">
          <SaladContainer>
            <Courses />
            <CampusMap />
          </SaladContainer>
        </div>
        <div className="col-9 h-100">
          <SaladContainer>
            <Schedule />
          </SaladContainer>
        </div>
      </div>
    </BodyContainer>
  );
};

export default BodyLarge;
