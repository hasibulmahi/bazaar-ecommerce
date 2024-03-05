import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BazaarButton from "../ui/button.component";
import { productList } from "./product.seeds";
import { categoryList } from "../category/category-seeds";
import CartCard from "../cart-card/cart-card.component";
import Slider from "react-slick";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 2,

//   // responsive: [
//   //   {
//   //     breakpoint: 1024,
//   //     settings: {
//   //       slidesToShow: 3,
//   //       slidesToScroll: 3,
//   //       infinite: true,
//   //       dots: true,
//   //     },
//   //   },
//   //   {
//   //     breakpoint: 600,
//   //     settings: {
//   //       slidesToShow: 2,
//   //       slidesToScroll: 2,
//   //       initialSlide: 2,
//   //     },
//   //   },
//   //   {
//   //     breakpoint: 480,
//   //     settings: {
//   //       slidesToShow: 1,
//   //       slidesToScroll: 1,
//   //     },
//   //   },
//   // ],
// };

function Product(props) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  const [value, setValue] = useState(2);
  const [activeCategory, setActiveCategory] = useState("92342398fdfg9893");
  const [categoryProducts, setCategoryProducts] = useState(null);
  const [categorySlug, setCategorySlug] = useState(null);
  const [openCart, setOpenCart] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow:
      categoryProducts?.length >= 4
        ? 4
        : categoryProducts?.length > 1 && categoryProducts?.length < 4
        ? categoryProducts?.length
        : 4,
    slidesToScroll:
      categoryProducts?.length >= 4
        ? 4
        : categoryProducts?.length > 1 && categoryProducts?.length < 4
        ? categoryProducts?.length
        : 4,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 0,
    //       slidesToScroll: 0,
    //       initialSlide: 0,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 0,
    //       slidesToScroll: 0,
    //     },
    //   },
    // ],
  };
  useEffect(() => {
    let products = [];

    productList.map((item, i) => {
      if (item.category.includes(activeCategory)) {
        products.push(item);
      }
    });
    setCategoryProducts(products);

    categoryList.map((item, i) => {
      if (item.id === activeCategory) {
        setCategorySlug(item.slug);
      }
    });
  }, [activeCategory]);

  const handleCloseCart = () => {
    setOpenCart(null);
  };

  console.log("categoryProducts", categoryProducts);

  return (
    <>
      <CartCard
        openCart={openCart ?? false}
        item={openCart}
        handleCloseCart={handleCloseCart}
      />
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={2.4}>
            <Box
              ref={ref}
              sx={{
                bgcolor: "#FFF",
                borderRadius: 1,
                py: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  paddingLeft: 4,
                }}
              >
                Electronics
              </Typography>
              {categoryList &&
                categoryList.map((item, i) => {
                  return (
                    <ListItem onClick={(e) => setActiveCategory(item.id)}>
                      <ListItemButton
                        sx={{
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </Box>
          </Grid>

          <Grid item sm={9.6}>
            <Box
              sx={{
                height: "100%",
              }}
            >
              <Slider {...settings}>
                {categoryProducts &&
                  [...categoryProducts].map((item, i) => (
                    <Box key={i}>
                      <Card
                        key={i}
                        sx={{
                          maxWidth: "220px",
                          height: `${height ? height : "300"}px`,
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
                            <Typography variant="h5" fontSize={14}>
                              {item.title}
                            </Typography>
                            <Typography fontFamily={14} fontWeight={600}>
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
                  ))}
              </Slider>
            </Box>
          </Grid>
          <Grid item sm={12}>
            <Box>
              {/* write your code and logic */}
              {/* {categoryProducts && categoryProducts.length > 4 && (
              // <Button href={`/category/${categorySlug}`} variant="contained">
              //   Show more
              // </Button>
            )} */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Product;
