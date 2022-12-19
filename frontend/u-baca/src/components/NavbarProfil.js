import React from "react";
import logo2 from "../assets/logo_ubacaa.png";
import menu from "../assets/bars-solid.svg";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FaWindows } from "react-icons/fa";

function Navbar() {
  //const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav id="navbar">
      <Link to="/" className="logo">
        <img src={logo2} alt="" />
      </Link>
      <p></p>
      <Dropdown>
        <Dropdown.Toggle className="d-block" id="dropdown">
          <img src={menu} class="menu-burger" alt="" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/profil" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              My Account{" "}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default Navbar;
