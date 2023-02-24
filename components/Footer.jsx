import React from "react";
import twitter from "../images/twitter";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links container">
        <a href="#">
          <img src={twitter}></img>
        </a>
        <a href="#">
          <img src="images\facebook.png"></img>
        </a>
        <a href="#">
          <img src="images\instagram.png"></img>
        </a>
        <a href="#">
          <img src="images\linkedin.png"></img>
        </a>
        <a href="#">
          <img src="images\github.png"></img>
        </a>
      </div>
    </footer>
  );
}
