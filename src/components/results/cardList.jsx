import React from "react";
import styled from "styled-components";
import InfoCard from "./infoCard";

const Text = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.scheduleCardText}`};
`;

const CardList = ({
  list,
  idKey,
  titleFn,
  textFns,
  disabledFn,
  handleClick,
  handleMouseOver,
  handleMouseLeave,
  showMoreInfoFn,
  moreInfoClick,
}) => {
  return (
    <>
      <Text>{list.length} result(s)</Text>
      {list.map((data) => {
        const id = data[idKey];
        const title = titleFn(data);
        const info = textFns.map((fn) => {
          return fn(data);
        });
        const disabled = disabledFn ? disabledFn(data) : false;

        return (
          <InfoCard
            key={id}
            title={title}
            handleClick={handleClick && (() => handleClick(data))}
            handleMouseOver={handleMouseOver && (() => handleMouseOver(data))}
            handleMouseLeave={
              handleMouseLeave && (() => handleMouseLeave(data))
            }
            info={info}
            moreInfoClick={
              moreInfoClick &&
              showMoreInfoFn &&
              showMoreInfoFn(data) &&
              (() => moreInfoClick(data))
            }
            disabled={disabled}
          />
        );
      })}
    </>
  );
};

export default React.memo(CardList);
