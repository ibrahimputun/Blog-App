import * as React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Box, Paper } from "@mui/material";

export default function Footer() {
  return (
    <Paper
       id="myFooter" // Özelleştirilmiş ID
  sx={{
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',

    backgroundColor: 'purple',
    
  }}
  component="footer"
  square
  variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
            color: 'white',
            fontFamily: 'Arial',
            textDecoration: 'none'
          }}
        >
          {"Copyright © "}
          <Link color="inherit" href="" style={{ marginRight: '10px' }}>
            Your Website
          </Link>
          {new Date().getFullYear()}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        ></Box>
      </Container>
    </Paper>
  );
}

