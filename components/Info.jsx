import React from "react";
import profile from "../images/profile.png";

export default function Info() {
  return (
    <div className="info">
      <img src={profile} alt="profile" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <a href="#">laurasmith.website</a>
      <a href="#" className="btn">
        <img src="images\email.png" />
        Email
      </a>
    </div>
  );
}
