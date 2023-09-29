import React from "react";
import Toolbar from "../header/toolbar.component";
import Navbar from "../header/navbar.component";
import { Box, Container } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Toolbar />
      <Navbar />
      <Box
        sx={{
          bgcolor: "#DFDFDF",
        }}
      >
        <Container>{children}</Container>
      </Box>
    </>
  );
}

export default Layout;
