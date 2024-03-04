import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";
import NotFoundImage from "../assets/loading.gif";

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px" }}
    >
      <img src={NotFoundImage} alt="Not Found" style={{ maxWidth: "100%", marginBottom: "20px" }} />
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography paragraph>
          We're sorry, but we can't find the page you're looking for.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Ana Sayfa
      </Button>
    </Container>
  );
};

export default NotFound;
