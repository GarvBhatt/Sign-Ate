import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderContainer = styled(Navbar)`
  background-color: silver;
  color: #333;
  padding: 15px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: background-color 0.3s;
`;

const Logo = styled(Navbar.Brand)`
  font-size: 25px;
  margin-left: 1.5em;
  margin-right: 12em;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
  margin-left: 2em;
  margin-right: 2em;

  &:hover {
    color: purple;
  }
`;

const Header = (props) => {
  return (
    <HeaderContainer expand="lg">
      <Container>
        <Logo to="/">
          <img
            src="https://img.icons8.com/fluency/48/sticky-notes.png"
            alt="Sticky Notes Logo"
          />
          {props.title}
        </Logo>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  title: "Sign Ate",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
