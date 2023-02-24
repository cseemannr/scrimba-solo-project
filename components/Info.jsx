import React from "react";
import profile from "../images/profile.png";
import email from "../images/email.png";

export default function Info() {
  return (
    <div className="info">
      <img src={profile} alt="profile" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <a href="#">laurasmith.website</a>
      <a href="#" className="btn">
        <img src={email} alt="email" />
        Email
      </a>
    </div>
  );
}
