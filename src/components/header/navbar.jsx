import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar";
import ExportButton from "./exportButton";
import ThemeToggle from "./themeToggle";
import salad_logo from "./../../images/cover_no_background.png";

const Nav = styled.nav`
  background-color: ${({ theme }) => `${theme.colors.headerBackground}`};
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkText = styled.div`
  color: ${({ theme }) => `${theme.colors.headerButton}`};
`;

const Logo = styled.img`
  width: 8rem;
  margin-left: 1rem;
  margin-right: 2rem;
`;

const Navbar = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <Nav className="navbar navbar-light" data-testid="nav-bar">
      {bigScreen && (
        <div>
          <Logo src={salad_logo} alt="Logo" data-testid="logo" />
        </div>
      )}
      <div className="flex-fill">
        <SearchBar />
      </div>
      {bigScreen && (
        <div>
          <ExportButton />
        </div>
      )}
      {bigScreen && (
        <div>
          <NavLink
            className="nav-item nav-link"
            to="/about"
            data-testid="about-link"
          >
            <LinkText>About</LinkText>
          </NavLink>
        </div>
      )}
      <ThemeToggle />
    </Nav>
  );
};

export default Navbar;
