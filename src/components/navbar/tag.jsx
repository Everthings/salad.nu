import React, { useState } from "react";
import styled from "styled-components";
import { getColor } from "./../../utils/colorUtils";

const TagContainer = styled.div`
  position: relative;
  height: 100%;
  color: ${({ theme }) => `${theme.colors.searchText}`};
  margin: auto;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
`;

const Text = styled.div`
  opacity: 80%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 80%;
`;

const Tag = ({ name, handleClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <TagContainer
      style={{ backgroundColor: `${getColor(name, 0.65)}` }}
      onClick={handleClick}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="search-tag"
    >
      <Text className={hovered ? "hidden" : ""}>{name}</Text>
      <Overlay>{hovered && "╳"}</Overlay>
    </TagContainer>
  );
};

export default Tag;
