import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BazaarButton from "../ui/button.component";
import Image from "next/image";

function Offer(props) {
  return (
    <Box
      sx={{
        bgcolor: "#E8ECEF",
        mb: 3,
        py: "30px",
      }}
    >
      <Grid container alignItems={"center"}>
        <Grid item sm={2}>
          <Image src={"/gift.png"} alt="img" height={100} width={200} />
        </Grid>
        <Grid item sm={8}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontWeight={600} mr={1} fontSize={30}>
              GIFT
            </Typography>
            <Typography fontWeight={600} color="#D23F57" mr={1} fontSize={30}>
              50% OFF
            </Typography>
            <Typography fontWeight={600} fontSize={30}>
              PERFECT STYLES
            </Typography>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            Only until the end of this week. Terms and conditions apply
          </Typography>
        </Grid>
        <Grid
          item
          sm={2}
          sx={{
            height: "100%",
          }}
        >
          <BazaarButton />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Offer;
