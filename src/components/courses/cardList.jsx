import React from "react";
import InfoCard from "./infoCard";

const CardList = ({
  list,
  idKey,
  titleFn,
  textFns,
  disabledFn,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  showMoreInfoFn,
  moreInfoClick,
}) => {
  return (
    <React.Fragment>
      <center>{list.length} result(s)</center>
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
            handleMouseEnter={
              handleMouseEnter && (() => handleMouseEnter(data))
            }
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
    </React.Fragment>
  );
};

export default CardList;
