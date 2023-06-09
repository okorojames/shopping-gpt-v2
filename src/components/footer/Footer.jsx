import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const copyRightDate = new Date().getFullYear();
  const myTwitter = "https://www.twitter.com/okorojames_";
  return (
    <div
      className="footer--container"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <div
        className="icon--rows"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          marginBottom: "20px",
        }}
      >
        <FaFacebook className="footerIcons__facebook" />
        <FaTwitter className="footerIcons__twitter" />
        <FaInstagram className="footerIcons__instagram" />
        <FaYoutube className="footerIcons__youtube" />
      </div>
      <div className="link--rows">
        <Link to="">About</Link>
        <Link to="">Need Help?</Link>
        <Link to="">Privacy</Link>
        <Link to="">Terms of use</Link>
        <Link to="">Products</Link>
        <Link to="">Advertising</Link>
      </div>
      <p
        className="last--footer"
        style={{ fontWeight: "300", fontSize: "18px" }}
      >
        <Link to={myTwitter} className="jamex__tech">
          JamexTech&nbsp;
        </Link>
        &copy;&nbsp;
        {copyRightDate}
      </p>
    </div>
  );
};

export default Footer;
