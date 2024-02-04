import Layout from "@/components/layout";
import { productList } from "@/components/product/product.seeds";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Home(props) {
  return (
    <>
      <Layout
        layoutSx={{
          bgcolor: "#F4F7FB",
        }}
      >
        <Container>
          <Grid container py={5}>
            <Grid item sm={6}>
              <Box>
                <Image
                  src="/t-shirt.jpg"
                  width={300}
                  height={300}
                  alt="Cart-Card Img"
                />
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box>
                <Typography variant="h4" fontWeight={600} mb={2} >Premium T-Shirt</Typography>
                <Typography mb={1}>Brand: Xiaomi</Typography>
                <Typography mb={1}>Rating: ****** (50)</Typography>
                <Box mb={1}>
                  <Button variant="outlined">Option 1</Button>
                  <Button variant="outlined">Option 1</Button>
                </Box>
                <Typography mb={1}>Price: $244.00</Typography>
                <Typography mb={1}>Stock Available</Typography>
                <Button sx={{
                  mb: 1
                }} variant="contained">Add To Cart</Button>
                <Typography>Sold By: Mobile Store</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Home;
