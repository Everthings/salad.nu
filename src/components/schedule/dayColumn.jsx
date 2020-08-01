import React from "react";
import styled from "styled-components";
import ScheduleCard from "./scheduleCard";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  padding: 0;
  width: 100%;
`;

const Cell = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-bottom: 2px dashed rgb(226, 231, 226);
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const DayColumn = ({ day, hours, data }) => {
  return (
    <Column>
      <Cell>
        <Text>{day}</Text>
      </Cell>
      {hours.map((hour) => {
        return (
          <Cell key={hour}>
            {data[hour].map((course) => {
              return <ScheduleCard key={course.data.unique_id} {...course} />;
            })}
          </Cell>
        );
      })}
    </Column>
  );
};

export default React.memo(DayColumn);
