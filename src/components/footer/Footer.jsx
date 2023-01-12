import React from "react";
import "./Footer.scss";
import placeholderLogo from "../../assets/Images/jCircle.png";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} className="footer_container">
      <Grid item xs={6} md={9} className="footer_top">
        <Grid item xs={12} md={3} className="footer_top-box">
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
        </Grid>
        <Grid  item xs={12} md={3} className="footer_top-box">
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
        </Grid>
        <Grid item xs={12} md={3}  className="footer_top-box">
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
        </Grid>
      </Grid>
      <Grid item xs={6} md={3} className="footer_bottom">
        <Grid item xs={12} className="footer_bottom-logo">
          <img src={placeholderLogo} alt="placeholder logo" />
        </Grid>
        <Grid item xs={12} className="footer_bottom-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy </a>
          <a href="#">Contact Us</a>
        </Grid>
      </Grid>

    </Grid>
  </Box>

  );
}

export default Footer;
