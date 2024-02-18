import * as React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Box, Paper } from "@mui/material";

export default function Footer() {
  return (
    <Paper
    sx={{
      marginTop: 'calc(10% + 60px)',
      bottom: 0,
      backgroundColor: 'purple',
    }}
    component="footer"
    square
    variant="outlined"
  >
    <Container maxWidth="lg" >
  <Box
  sx={{
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    my: 1,
    color: 'white', // Yeni eklenen satır
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
      >
       
      </Box>
    </Container>
  </Paper>
);
}




