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
          <Grid container>
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
                <Typography>Premium T-Shirt</Typography>
                <Typography>Brand: Xiaomi</Typography>
                <Typography>Rating: ****** (50)</Typography>
                <Box>
                  <Button variant="outlined">Option 1</Button>
                  <Button variant="outlined">Option 1</Button>
                </Box>
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Home;
