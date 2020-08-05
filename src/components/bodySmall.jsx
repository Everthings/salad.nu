import React from "react";
import styled from "styled-components";
import Courses from "./courses/courses";
import Schedule from "./schedule/schedule";
import CampusMap from "./map/campusMap";
import { TabContainer, Tab, Nav } from "react-bootstrap";

const StyleWrapper = styled.div`
  height: 100%;
  flex: 1;
  min-height: 0;

  & .nav-link {
    color: ${({ theme }) => `${theme.colors.navBackgroundActive} !important`};
    background-color: ${({ theme }) =>
      `${theme.colors.navBackground} !important`};
  }

  & .nav-link.active {
    color: ${({ theme }) => `${theme.colors.navBackground} !important`};
    background-color: ${({ theme }) =>
      `${theme.colors.navBackgroundActive} !important`};
  }
`;

const FlexContainer = styled.div`
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
`;

const SaladContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.containerBorder}`};
  border: ${({ theme }) => `0.25rem solid ${theme.colors.containerBorder}`};
  border-radius: 1rem;
  height: 100%;
`;

const BodySmall = () => {
  return (
    <StyleWrapper>
      <TabContainer
        defaultActiveKey="courses"
        transition={false}
        variant="pills"
      >
        <FlexContainer>
          <Nav variant="pills" className="mt-3 mb-3 justify-content-center">
            <Nav.Item className="mr-2">
              <Nav.Link eventKey="courses">Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="schedule">Schedule</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="h-100" style={{ overflow: "auto" }}>
            <Tab.Pane className="h-100" eventKey="courses">
              <SaladContainer>
                <Courses />
                <CampusMap />
              </SaladContainer>
            </Tab.Pane>
            <Tab.Pane className="h-100" eventKey="schedule">
              <SaladContainer>
                <Schedule />
              </SaladContainer>
            </Tab.Pane>
          </Tab.Content>
        </FlexContainer>
      </TabContainer>
    </StyleWrapper>
  );
};

export default BodySmall;
