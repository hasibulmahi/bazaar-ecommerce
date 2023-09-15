import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleSlide from "./single-slide.component";
import { heroContent } from "./hero-content";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { headerChild } from "./header-seeds";
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
    <Box>
      <Container>
        <Grid container>
          {/* Grid item start */}
          <Grid item sm={10}>
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
          <Grid item sm={2}>
            {headerChild &&
              headerChild.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    minHeight: "232px",
                    minWidth: "286px",
                    bgcolor: "#F3EFEC",
                    padding: "0px",
                  }}
                >
                  <Typography>{item.title}</Typography>
                  <Typography>{item.subtitle}</Typography>
                  <IconButton>{item.btn}</IconButton>
                  <Image src={item.image} width={100} height={100} alt="img" />
                  
                </Box>
              ))}
          </Grid>
          {/* Grid item start */}
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
