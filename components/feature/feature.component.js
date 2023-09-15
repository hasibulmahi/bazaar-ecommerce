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
    <Container>
      <Grid container>
        {featureItem &&
          featureItem.map((item, i) => (
            <Grid
              item
              sm={3}
              key={i}
              sx={{
                display: "flex",
              }}
            >
              <IconButton>{item.icon}</IconButton>
              <Box>
                <Typography>{item.title}</Typography>
                <Typography>{item.subtitle}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Feature;
