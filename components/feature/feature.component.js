import React from "react";
import { featureItem } from "./feature-item";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

function Feature(props) {
  return (
    <Container
      sx={{
        bgcolor: "#FFF",
        mb: 5,
        mt: 3,
      }}
    >
      <Grid container>
        {featureItem &&
          featureItem.map((item, i) => (
            <Grid
              item
              sm={3}
              key={i}
              sx={{
                display: "flex",
                px: 3,
                py: 2,
              }}
            >
              <IconButton
                sx={{
                  mr: 2,
                  color: "#2B3445",
                }}
              >
                {item.icon}
              </IconButton>
              <Box>
                <Typography color="#2B3445" fontSize={15} fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography color="#7D879C" fontSize={14}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Feature;
