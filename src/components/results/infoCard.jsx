import React from "react";
import styled from "styled-components";

const Card = styled.div`
  color: ${({ theme }) => `${theme.colors.infoCardText}`};
  background: ${({ theme }) => `${theme.colors.infoCardBackground}`};
  border: ${({ theme }) => `0.2rem solid ${theme.colors.infoCardBorder}`};
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  cursor: pointer;

  :hover {
    border: ${({ theme }) =>
      `0.2rem solid ${theme.colors.infoCardBorderHighlight}`};
    border-radius: 10px;
  }
`;

const CardBody = styled.div`
  padding: 0.9rem;
`;

const Line = styled.hr`
  border-top: ${({ theme }) => `0.2rem solid ${theme.colors.infoCardDivider}`};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h5`
  margin-bottom: 0;
`;

const Text = styled.p`
  margin: 0;
`;

const RedText = styled.p`
  margin: 0;
  color: #e25959;
`;

const Button = styled.button`
  background-color: ${({ theme }) => `${theme.colors.moreInfoBackground}`};
  color: ${({ theme }) => `${theme.colors.moreInfoText}`};
  border: ${({ theme }) => `1px solid ${theme.colors.moreInfoBorder}`};
  margin-top: 0.5rem;
  margin-left: 0;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  display: inline-block;
  position: relative;
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }) => `${theme.colors.moreInfoTextHighlight}`};
  }
`;

const InfoCard = ({
  title,
  handleClick,
  handleMouseOver,
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
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={disabled ? "disabled" : ""}
      data-testid="info-card"
    >
      <CardBody>
        <Title data-testid="info-card-title">{title}</Title>
        <Line />
        {disabled && <RedText>{disabled}</RedText>}
        {info.map((text) => {
          if (text === "") return undefined;
          return <Text key={text}>{text}</Text>;
        })}
        {moreInfoClick && (
          <Button
            onClick={handleMoreInfoClick}
            data-testid="info-card-more-info-button"
          >
            More Info
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default React.memo(InfoCard);
