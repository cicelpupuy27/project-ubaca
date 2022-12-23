import React from "react";
import logo2 from "../assets/logo_ubacaa.png";
import menu from "../assets/bars-solid.svg";
import axios from 'axios';
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  //const navigate = useNavigate();

  const token = localStorage.getItem('token')
  const logout = (e) => {
    e.preventDefault();
     axios
      .post(`https://admin.u-baca.my.id/api/auth/logout`,{},{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        localStorage.clear();
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e)
      });

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
