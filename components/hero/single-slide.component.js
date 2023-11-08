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
          md={7}
          lg={6}
          xs={12}
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
          right: {
            lg: "120px",
            md: "70px",
          },
          top: "30px",
          display: {
            xs: "none",
            md: "block",
          },
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
