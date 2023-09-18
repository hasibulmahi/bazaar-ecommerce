import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BazaarButton from "../ui/button.component";

function SingleSlide({ item }) {
  console.log(item);
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <Grid container>
        <Grid
          sx={{
            paddingLeft: "100px",
            paddingTop: "140px",
          }}
          item
          sm={6}
        >
          <Typography>{item.subtitle1}</Typography>
          <Typography>{item.title}</Typography>
          <Typography>
            {item.subtitle2} {item.subtitle3}
          </Typography>
          <Typography>{item.subtitle4}</Typography>
          <BazaarButton />
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        <Image
          src="/header-poster.png"
          width={218}
          height={408}
          alt="header-img"
        />
      </Box>
    </Box>
  );
}

export default SingleSlide;
