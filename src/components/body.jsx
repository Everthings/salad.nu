import React from "react";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import { useMediaQuery } from "react-responsive";
import { TabContainer, Tab, Nav } from "react-bootstrap";

const Body = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <div>
      {bigScreen && (
        <div className="container-fluid">
          <div className="row mt-4 ml-3 mr-3">
            <div className="col-3">
              <Courses />
            </div>
            <div className="col-9">
              <Schedule />
            </div>
          </div>
        </div>
      )}

      {!bigScreen && (
        <div className="container-fluid fill-height">
          <TabContainer
            defaultActiveKey="courses"
            transition={false}
            variant="pills"
          >
            <div className="row">
              <div className="col">
                <Nav
                  variant="pills"
                  className="mt-3 mb-3 justify-content-center"
                >
                  <Nav.Item className="mr-2">
                    <Nav.Link eventKey="courses">Courses</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="schedule">Schedule</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="courses">
                    <Courses />
                  </Tab.Pane>
                  <Tab.Pane eventKey="schedule">
                    <Schedule />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </TabContainer>
        </div>
      )}
    </div>
  );
};

export default Body;
