import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const About = () => {
  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Hello! Welcome to our website. Connect with us on social media:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <IconButton
          href="https://www.instagram.com/kullaniciadi/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/kullaniciadi/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://github.com/kullaniciadi"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/kullaniciadi"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com/kullaniciadi"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <TwitterIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" mt={4}>
        For business inquiries or collaboration, please email us at:
        <br />
        <strong>info@example.com</strong>
      </Typography>
    </Box>
  );
};

export default About;
