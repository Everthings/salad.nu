import React from "react";
import styled from "styled-components";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import CampusMap from "./courses/campusMap";
import { TabContainer, Tab, Nav } from "react-bootstrap";

const StyleWrapper = styled.div`
  & .nav-link {
    color: #7ecc86 !important;
    background-color: #ffffff !important;
  }

  & .nav-link.active {
    color: #ffffff !important;
    background-color: #7ecc86 !important;
  }
`;

const SaladContainer = styled.div`
  background-color: #dcf0da;
  border: 0.75rem solid #dcf0da;
  border-radius: 1rem;
`;

const BodySmall = () => {
  return (
    <StyleWrapper>
      <div className="container-fluid fill-height">
        <TabContainer
          defaultActiveKey="courses"
          transition={false}
          variant="pills"
        >
          <div className="row">
            <div className="col">
              <Nav variant="pills" className="mt-3 mb-3 justify-content-center">
                <Nav.Item className="mr-2">
                  <Nav.Link eventKey="courses">Courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="schedule">Schedule</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="courses">
                  <SaladContainer>
                    <Courses />
                    <CampusMap />
                  </SaladContainer>
                </Tab.Pane>
                <Tab.Pane eventKey="schedule">
                  <SaladContainer>
                    <Schedule />
                  </SaladContainer>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </TabContainer>
      </div>
    </StyleWrapper>
  );
};

export default BodySmall;
