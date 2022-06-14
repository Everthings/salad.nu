import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./navbar/navbar";
import styled from "styled-components";

const Banner = styled.div`
  background-color: ${({ theme }) => `${theme.colors.bannerBackground}`};
  padding: 0.5rem 0;
  position: relative;
`;

const BannerMessage = styled.p`
  color: ${({ theme }) => `${theme.colors.bannerText}`};
  text-align: center;
  font-weight: bold;
  margin: 0 8rem;
  & a {
    color: ${({ theme }) => `${theme.colors.bannerLink}`};
  }
`;

const BannerDismissContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const BannerDismiss = styled.button`
  background-color: transparent;
  color: ${({ theme }) => `${theme.colors.bannerDismiss}`};
  border: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;

const BannerDismissForever = styled(BannerDismiss)`
  color: transparent;
  transition: color 150ms ease-in-out;
  ${BannerDismissContainer}:hover & {
    color: ${({ theme }) => `${theme.colors.bannerDismissSave}`};
  }
`;

const Header = () => {
  const [showBanner, setShowBanner] = useState(!localStorage.getItem("banner"));

  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <>
      {showBanner && bigScreen && (
        <Banner>
          <BannerMessage>
            This upcoming fall, salad.nu will join forces with Plan
            Northwestern.{" "}
            <a href="https://github.com/dilanx/plan-northwestern/blob/main/SALAD.md">
              read more...
            </a>
          </BannerMessage>
          <BannerDismissContainer>
            <BannerDismissForever
              onClick={() => {
                localStorage.setItem("banner", "hide");
                setShowBanner(false);
              }}
            >
              Dismiss forever
            </BannerDismissForever>
            <BannerDismiss
              onClick={() => {
                setShowBanner(false);
              }}
            >
              Dismiss
            </BannerDismiss>
          </BannerDismissContainer>
        </Banner>
      )}
      <Navbar />
    </>
  );
};

export default Header;
