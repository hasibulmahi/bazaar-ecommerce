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
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { dealList } from "./deals.seeds";
import Image from "next/image";
import BazaarButton from "../ui/button.component";

function Deals(props) {
  const [value, setValue] = useState(2);
  return (
    <Box>
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
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      sx={{}}
                    />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <BazaarButton
                    text="Add to cart"
                    buttonSx={{
                      bgcolor: "transparent",
                      border: "1px solid #D8E0E9",
                      boxShadow: "none",
                      color: "#4B566B",
                      position: "relative",
                      left: "50%",
                      borderRadius: 1,
                      transform: "translateX(-50%)",
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Deals;
