import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./header/navbar";
import salad_logo from "./../images/cover_green.png";

const Header = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const logo = bigScreen ? salad_logo : null;

  return <Navbar logo={logo} />;
};

export default Header;
