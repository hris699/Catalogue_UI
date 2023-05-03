import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

function HeaderLogin() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Catalogue App</NavbarBrand>
      </Navbar>
    </div>
  );
}
export default HeaderLogin;