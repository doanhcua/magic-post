import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import logo from "../assets/image/logo.png";
// import "./Navigation.css";
function Navigation() {
  return (
    <Nav>
      <NavMenu>
        <a href="https://google.com">
          <img src={logo} alt="logo" />
        </a>
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/tracking">Tra cứu</NavLink>
        <NavLink to="/createPostalItems">Tạo đơn</NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navigation;
