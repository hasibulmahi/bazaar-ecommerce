import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BazaarButton from "../ui/button.component";
import { red } from "@mui/material/colors";

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
        <Grid
          item
          sm={10}
          sx={{
            pl: 5,
          }}
        >
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
