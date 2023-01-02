import React from "react";
import "./Footer.scss";
import placeholderLogo from "../../assets/Images/jCircle.png";
function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_top-box">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Leetcode</a>
            </li>
            <li>
              <a href="#">HackerRank</a>
            </li>
            <li>
              <a href="#">CodeWars</a>
            </li>
            <li>
              <a href="#">Data Structures & Algorithms</a>
            </li>
            <li>
              <a href="#">Notes and Resources</a>
            </li>
          </ul>
        </div>
        <div className="footer_top-box">
          <h4>Contribute</h4>
          <ul>
            <li>
              <a href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md">
                Contributing
              </a>
            </li>
            <li>
              <a href="https://docs.github.com/en/site-policy/github-terms/github-community-guidelines">
                Github Community Guidelines
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_top-box">
          <h4>About us</h4>
          <ul>
            <li>
              <a href="#">Meet the team</a>
            </li>
            <li>
              <a href="#">Social Media link</a>
            </li>
            <li>
              <a href="#">Social Media link</a>
            </li>
            <li>
              <a href="#">Social Media link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom-logo">
          <img src={placeholderLogo} alt="placeholder logo" />
        </div>
        <div className="footer_bottom-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy </a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
