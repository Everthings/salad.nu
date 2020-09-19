import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return (
    <Container>
      <Center>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Center>
    </Container>
  );
};

export default Loading;
