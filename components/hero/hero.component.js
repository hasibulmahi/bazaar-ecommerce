import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleSlide from "./single-slide.component";
import { heroContent } from "./hero-item";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { heroChild } from "./hero-seeds";
import BazaarButton from "../ui/button.component";

function Hero(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "bazaar-hero-slider",
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
        }}
      >
        <Button
          sx={{
            minWidth: "initial",
          }}
        >
          <FiberManualRecordIcon />
        </Button>
      </div>
    ),
  };
  return (
    <Grid container spacing={2}>
      {/* Grid item start */}
      <Grid item sm={9}>
        <Slider {...settings}>
          {heroContent.map((item, i) => (
            <Box
              key={i}
              sx={{
                minHeight: "480px",
                bgcolor: "#F3EFEC",
              }}
            >
              <SingleSlide item={item} />
            </Box>
          ))}
        </Slider>
      </Grid>
      {/* Grid item end */}
      {/* Grid item start */}
      <Grid
        sx={
          {
            // paddingLeft: 5,
          }
        }
        item
        sm={3}
      >
        {heroChild &&
          heroChild.map((item, i) => (
            <Box
              key={i}
              sx={{
                minHeight: "230px",
                bgcolor: "#F3EFEC",
                padding: "0px",
                position: "relative",
                marginBottom: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Box sx={{}}>
                <Typography>{item.title}</Typography>
                <Typography>{item.subtitle1}</Typography>
                <Typography>{item.subtitle2}</Typography>
                <IconButton>{item.btn}</IconButton>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              >
                <Image src={item.image} width={100} height={100} alt="img" />
              </Box>
            </Box>
          ))}
      </Grid>
      {/* Grid item start */}
    </Grid>
  );
}

export default Hero;
