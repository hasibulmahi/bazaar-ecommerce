import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BazaarButton from "../ui/button.component";

function SingleSlide({ item }) {
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
            paddingTop: "110px",
          }}
          item
          sm={6}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "500",
              color: "#2B3445",
            }}
          >
            {item.subtitle1}
          </Typography>
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "700",
              color: "#2B3445",
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "500",
                color: "#2B3445",
              }}
            >
              {item.subtitle2}
            </Typography>
            <Typography
              sx={{
                ml: "0.75rem",
                fontSize: "30px",
                fontWeight: "500",
                color: "#D23F57",
              }}
            >
              {item.subtitle3}
            </Typography>
          </Box>
          <Typography
            sx={{
              mb: 2,
            }}
          >
            {item.subtitle4}
          </Typography>
          <BazaarButton />
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "absolute",
          right: "120px",
          top: "30px",
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
