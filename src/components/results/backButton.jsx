import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-left: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const BackButton = ({ handleClick }) => {
  return (
    <Button
      className="btn btn-danger"
      onClick={handleClick}
      data-testid="back-button"
    >
      Back
    </Button>
  );
};

export default BackButton;
