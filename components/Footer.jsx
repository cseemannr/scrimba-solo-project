import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links container">
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="#">
          <img src={github} alt="github" />
        </a>
      </div>
    </footer>
  );
}
