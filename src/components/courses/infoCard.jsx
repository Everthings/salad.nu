import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(226, 231, 226, 0.5);
  border: 0.2rem solid #f6fdf4;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  :hover {
    border: 0.2rem solid #aed19e;
    border-radius: 10px;
  }
`;

const Line = styled.hr`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h5`
  margin-bottom: 0;
`;

const Text = styled.p`
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

const InfoCard = ({
  title,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  info,
  disabled,
}) => {
  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={disabled ? "disabled" : ""}
    >
      <div className="card-body">
        <Title>{title}</Title>
        <Line />
        {info.map((text) => {
          return <Text key={text}>{text}</Text>;
        })}
      </div>
    </Card>
  );
};

export default InfoCard;
