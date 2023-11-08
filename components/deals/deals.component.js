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
import CartCard from "../cart-card/cart-card.component";
import MoreProductsBar from "./more-products-bar";

function Deals(props) {
  const [value, setValue] = useState(2);
  const [openCart, setOpenCart] = useState(null);
  const handleCloseCart = () => {
    setOpenCart(null);
  };

  return (
    <>
      <CartCard
        openCart={openCart ?? false}
        item={openCart}
        handleCloseCart={handleCloseCart}
      />
      <Box
        sx={{
          paddingTop: 5,
          color: "#2B3445",
        }}
      >
        <MoreProductsBar />
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
                    <CardContent
                      onClick={() => setOpenCart(item)}
                      sx={{
                        textAlign: "center",
                      }}
                    >
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
                      item={item}
                      text="Add to cart df"
                      buttonSx={{
                        bgcolor: "transparent",
                        border: "1px solid #D8E0E9",
                        boxShadow: "none",
                        color: "#4B566B",
                        position: "relative",
                        left: "50%",
                        borderRadius: 1,
                        transform: "translateX(-50%)",
                        py: "2px",
                      }}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default Deals;
