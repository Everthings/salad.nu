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
  border-bottom: ${({ theme }) => `2px dashed ${theme.colors.scheduleDivider}`};
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => `${theme.colors.scheduleText}`};
`;

const DayColumn = ({
  day,
  hours,
  data,
  hoveredId,
  handleXClick,
  handleClick,
  handleMouseOver,
  handleMouseLeave,
}) => {
  return (
    <Column>
      <Cell>
        <Text>{day}</Text>
      </Cell>
      {hours.map((hour) => {
        return (
          <Cell key={hour}>
            {data[hour].map((section) => {
              const unique_id = section.data.unique_id;
              return (
                <ScheduleCard
                  key={unique_id}
                  hovered={unique_id === hoveredId}
                  handleXClick={handleXClick}
                  handleClick={handleClick}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                  {...section}
                />
              );
            })}
          </Cell>
        );
      })}
    </Column>
  );
};

export default React.memo(DayColumn);
