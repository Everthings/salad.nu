import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(226, 231, 226, 0.5);
  border: 0.2rem solid #f6fdf4;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;

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

const Button = styled.button`
  margin-top: 0.5rem;
  margin-left: 0;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  background-color: #e4edea;
`;

const InfoCard = ({
  title,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  info,
  moreInfoClick,
  disabled,
}) => {
  const handleMoreInfoClick = (e) => {
    e.stopPropagation();
    moreInfoClick();
  };

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
        {moreInfoClick && (
          <Button onClick={handleMoreInfoClick}>More Info</Button>
        )}
      </div>
    </Card>
  );
};

export default InfoCard;
