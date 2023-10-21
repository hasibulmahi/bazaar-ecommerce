import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { dealList } from "./deals.seeds";
import Image from "next/image";
import BazaarButton from "../ui/button.component";
import EastIcon from "@mui/icons-material/East";

function Deals(props) {
  const [value, setValue] = useState(2);
  return (
    <Box
      sx={{
        paddingTop: 5,
        color: "#2B3445",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 1,
        }}
      >
        <Typography
          sx={{
            color: "#2B3445",
          }}
          fontSize={15}
          fontWeight={600}
        >
          Deals of the day
        </Typography>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            More Products
          </Typography>
          <IconButton>
            <EastIcon
              sx={{
                color: "#2B3445",
              }}
              fontSize="small"
            />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {dealList &&
          dealList.map((item, i) => (
            <Grid item sm={2.4} key={i}>
              <Card
                sx={{
                  maxWidth: "220px",
                  py: 2
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
                    <Typography fontSize={14}>{item.title}</Typography>
                    <Typography fontSize={14} fontWeight="600">
                      ${item.price}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Rating
                        name="simple-controlled"
                        size="small"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        sx={{}}
                      />
                      <Typography
                        sx={{
                          paddingLeft: 1,
                          fontSize: "14px",
                          color: "#7D879C",
                        }}
                      >
                        {item.totalRating}
                      </Typography>
                    </Box>
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
                      py: "2px"
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
