import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 750px;
`;

const Title = styled.h1`
  color: #28a745;
`;

const Text = styled.p`
  color: #28a745;
`;

const AboutPage = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>About</Title>
        <Text>Welcome!</Text>
        <Text>
          This is personal project I've been developing over the summer to
          simplify course scheduling at NU. It started mainly as a way for me to
          learn react, and I've since decided to release it as I think it could
          provide value to students. It's heavily inspired by serif, and it
          shares several of its core features. Please note that salad.nu is in
          no way a replacement for Caesar, but rather as a tool to visualize
          your course selections.
        </Text>
        <Text>
          Right now, it's loaded with the FALL 2019 course data, but I'm
          confident that I'll be able to migrate to FALL 2020 as soon as Caesar
          makes that data available.
        </Text>
        <Text>
          If you'd like to suggest additonal features to or give feedback on
          your experience, please use this
          <a
            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdh9C7yi1i3RHhIPctTKXApUdr1xUkcgS__ZLhwsZCbziYnQg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" form"}
          </a>
          . The site is still its early stages of development, so any feedback
          would be greatly appreciated. Thanks!
        </Text>
        <Text>- Andy '23</Text>
        <NavLink className="btn btn-success ml-3" to="/">
          Back
        </NavLink>
      </InnerContainer>
    </Container>
  );
};

export default AboutPage;
