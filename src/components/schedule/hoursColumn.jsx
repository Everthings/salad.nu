import React from "react";
import styled from "styled-components";
import { convertHour2Text } from "./../../utils/scheduleUtils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  margin-right: 0.5rem;
  flex: 0 0 3rem;
`;

const Cell = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -1rem);
  text-align: right;
  color: ${({ theme }) => `${theme.colors.scheduleText}`};
`;

const HoursColumn = ({ hours }) => {
  return (
    <Column>
      {hours.map((time) => {
        return (
          <Cell key={time}>
            <Text>{convertHour2Text(time)}</Text>
          </Cell>
        );
      })}
    </Column>
  );
};

export default React.memo(HoursColumn);
