import React, { useState } from "react";
import { featureItem } from "./feature-item";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

function Feature(props) {
  const [mouseEnter, setMouseEnter] = useState(null);
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
              lg={3}
              sm={6}
              xs={12}
              key={i}
              sx={{
                px: 3,
                py: 3,
              }}
            >
              <Box
                onMouseEnter={() => setMouseEnter(i)}
                onMouseLeave={() => setMouseEnter(null)}
                sx={{
                  display: "flex",
                  width: "100%",
                  borderRight:
                    i !== featureItem.length - 1 ? "1px solid #eee" : "0px",
                }}
              >
                <IconButton
                  sx={{
                    mr: 2,
                    color: "#2B3445",
                    transition: ".30s linear",
                    transform: `scale(${mouseEnter === i ? 1.2 : 1})`,
                  }}
                >
                  {item.icon}
                </IconButton>
                <Box>
                  <Typography
                    color="#2B3445"
                    fontSize={15}
                    fontWeight={600}
                    sx={{
                      transition: ".30s linear",
                      letterSpacing: `${mouseEnter === i ? "1px" : ".30px"}`,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="#7D879C" fontSize={14}>
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Feature;
