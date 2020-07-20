import React from "react";
import Navbar from "./header/navbar";
import salad_logo from "./../images/cover_green.png";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const logo = bigScreen ? salad_logo : null;

  return <Navbar logo={logo} />;
};

export default Header;
