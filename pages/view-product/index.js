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
                <Typography variant="h4" fontWeight={600} >Premium T-Shirt</Typography>
                <Typography>Brand: Xiaomi</Typography>
                <Typography>Rating: ****** (50)</Typography>
                <Box>
                  <Button variant="outlined">Option 1</Button>
                  <Button variant="outlined">Option 1</Button>
                </Box>
                <Typography>Price: $244.00</Typography>
                <Typography>Stock Available</Typography>
                <Button variant="contained">Add To Cart</Button>
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
