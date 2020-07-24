import React from "react";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import CampusMap from "./courses/campusMap";
import { TabContainer, Tab, Nav } from "react-bootstrap";

const BodySmall = () => {
  return (
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
                <div className="salad-container-outer">
                  <Courses />
                  <CampusMap />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="schedule">
                <div className="salad-container-outer">
                  <Schedule />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </TabContainer>
    </div>
  );
};

export default BodySmall;
