import React from "react";
import styled from "styled-components";
import { convertHour2Text } from "../../utils/scheduleUtils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
  margin-right: 0.5rem;
  flex: 0 0 3rem;
`;

const Text = styled.div`
  text-align: right;
  margin: 0;
`;

const HoursColumn = ({ hours }) => {
  return (
    <Column>
      {hours.map((time) => {
        return (
          <div key={time}>
            <Text>{convertHour2Text(time)}</Text>
          </div>
        );
      })}
    </Column>
  );
};

export default HoursColumn;
