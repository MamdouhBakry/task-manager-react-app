import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signout } from "../../redux/actions/userAction";
export default function Header() {
  let auth = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span
            style={{ cursor: "pointer" }}
            onClick={logout}
            className="nav-link"
          >
            SignOut
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            SignUp
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <>
      <Navbar
        style={{ zIndex: 2, height: "60px" }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container fluid>
          <Link to="/" className="navbar-brand">
            Task Manager
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
