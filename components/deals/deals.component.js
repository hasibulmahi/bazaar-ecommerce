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
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Deals(props) {
  const [value, setValue] = useState(2);
  const [openCart, setOpenCart] = useState(null);
  const handleCloseCart = () => {
    setOpenCart(null);
  };

  console.log("dealList", dealList);

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
        <Box
          sx={{
            ml: -2,
            mr: -2,
          }}
        >
          <Slider {...settings}>
            {dealList &&
              dealList.map((item, i) => (
                <Box key={i}>
                  <Box
                    sx={{
                      px: 2,
                    }}
                  >
                    <Card>
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
                            py: "2px",
                          }}
                        />
                      </CardActions>
                    </Card>
                  </Box>
                </Box>
              ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default Deals;
