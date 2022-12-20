import React from "react";
import logo from "../assets/logo_footer2.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <footer>
      <div className="container-fluid text-center text-md-left">
        <a href="#" className="footer-logo">
          <img src={logo} alt="footer-logo" />
        </a>
        <a href="#" className="about-us">
          About Us
        </a>
      </div>
      <a href="#">
        <img src={facebook} alt="" className="fb" />
      </a>
      <a href="#">
        <img src={twitter} alt="" className="tw" />
      </a>
    </footer>
  );
}
export default Footer;
