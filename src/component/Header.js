import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Catalogue App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem >
            <NavLink to="/login">Sign-up/Sign-in</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header;