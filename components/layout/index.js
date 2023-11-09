import React from "react";
import Toolbar from "../header/toolbar.component";
import Navbar from "../header/navbar.component";
import { Box, Container } from "@mui/material";
import Footer from "../footer/footer.component";

function Layout({ children, layoutSx }) {
  return (
    <>
      <Toolbar />
      <Navbar />

      <Box
        sx={{
          bgcolor: "#DFDFDF",
          ...layoutSx,
        }}
      >
        <Container>{children}</Container>
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
