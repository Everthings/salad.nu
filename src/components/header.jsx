import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTerm } from "./../store/slices/term";
import { CURRENT_TERM_ID } from "./../configs";
import Navbar from "./header/navbar";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTerm(CURRENT_TERM_ID));
  }, [dispatch]);

  return <Navbar />;
};

export default Header;
