import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: safe center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  max-width: 750px;
  overflow: scroll;
`;

const Title = styled.h1`
  color: ${({ theme }) => `${theme.colors.aboutText}`};
`;

const Text = styled.p`
  color: ${({ theme }) => `${theme.colors.aboutText}`};
`;

const Button = styled.div`
  background-color: ${({ theme }) => `${theme.colors.aboutButton}`};
  padding-right: 0;
  padding-left: 0;

  & a {
    color: ${({ theme }) => `${theme.colors.aboutButtonText}`};
    padding: 0.375rem 0.75rem;
    text-decoration: none;
  }
`;

const AboutPage = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>About</Title>
        <Text>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome!
          </a>
        </Text>
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
          If you'd like to give feedback on your experience, please use this
          <a
            href="https://airtable.com/shrkkzdKxTTlVSRqc"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" form"}
          </a>
          . If you'd like to report any bugs, please use this{" "}
          <a
            href="https://airtable.com/shrNZZEGLM9sPx1s0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" form"}
          </a>
          . The site is still its early stages of development, so any feedback
          would be greatly appreciated. Thanks!
        </Text>
        <Text>
          A couple of people have asked what the 'Export' button does. Simply
          put, it just exports your schedule as a csv which you can then import
          into google calendar (following these{" "}
          <a
            href="https://support.google.com/calendar/answer/37118?co=GENIE.Platform%3DDesktop&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            instructions
          </a>
          ). I recommend performing this step in Chrome, as a few browsers have
          known bugs with google calendar imports. At this moment, salad.nu only
          supports google calendar.
        </Text>
        <Text>
          If you're wondering what the different modes of instruction mean,
          please refer to this{" "}
          <a
            href="https://www.registrar.northwestern.edu/faculty-staff/fall-2020-scheduling.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            site
          </a>{" "}
          .
        </Text>
        <Text>Andy '23</Text>
        <Button className="btn mb-3">
          <Link to="/" data-testid="about-back-button">
            Back
          </Link>
        </Button>
      </InnerContainer>
    </Container>
  );
};

export default AboutPage;
