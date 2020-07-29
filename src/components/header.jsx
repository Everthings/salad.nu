import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Navbar from "./header/navbar";
import salad_logo from "./../images/cover_no_background.png";
import { loadTerm } from "./../store/slices/term";
import { CURRENT_TERM_ID } from "./../configs";

const Header = () => {
  const dispatch = useDispatch();

  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  useEffect(() => {
    dispatch(loadTerm(CURRENT_TERM_ID));
  }, [dispatch]);

  const logo = bigScreen ? salad_logo : null;

  return <Navbar logo={logo} />;
};

export default Header;
