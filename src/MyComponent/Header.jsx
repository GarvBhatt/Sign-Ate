import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { title } = props;

  const headerStyle = {
    backgroundColor: "rgb(210 210 210)",
    color: "#333",
    padding: "7px",
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const navLinkStyle = {
    fontSize: "21px",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
    marginRight: "5.5em",
  };

  const logoStyle = {
    fontSize: "25px",
    marginRight: "14.25em",
  };

  const onNavLinkHover = (e) => {
    e.target.style.color = "purple";
  };

  const onNavLinkLeave = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <Navbar expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand to="/" style={logoStyle}>
        <img width="41" height="41" src="https://img.icons8.com/fluency/48/sticky-notes.png" alt="news"/>{title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              style={navLinkStyle}
              onClick={()=>{props.setG(true)}}
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              Home
            </Link>
            <Link
              style={navLinkStyle}
              onClick={()=>{props.setG(false)}}
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;