import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { dealList } from "./deals.seeds";
import Image from "next/image";

function Deals(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography>Deals of the day</Typography>
        <Typography
          sx={{
            marginLeft: "auto",
          }}
        >
          More Products
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {dealList &&
          dealList.map((item, i) => (
            <Grid item sm={2.4} key={i}>
              <Card
                sx={{
                  maxWidth: "220px",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={item.image}
                      height={140}
                      width={120}
                      alt="img"
                    />
                  </Box>
                  <CardContent
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>${item.price}</Typography>
                    <Typography>{item.totalRating}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>{item.btn}</CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Deals;
