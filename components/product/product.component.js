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
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BazaarButton from "../ui/button.component";
import { productList } from "./product.seeds";
import { categoryList } from "../category/category-seeds";
import Link from "next/link";

function Product(props) {
  const [value, setValue] = useState(2);
  const [activeCategory, setActiveCategory] = useState("92342398fdfg9893");

  //

  console.log(activeCategory);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={2}>
          <Box>
            {categoryList &&
              categoryList.map((item, i) => {
                return (
                  <Button
                    variant="text"
                    onClick={(e) => setActiveCategory(item.id)}
                  >
                    {item.title}
                  </Button>
                );
              })}
          </Box>
        </Grid>

        <Grid item sm={10} >
          {productList &&
            productList.map((item, i) => (
              <Card key={i}
                sx={{
                  maxWidth: "220px",
                  
                }}
              >
                <CardActionArea>
                  <CardContent
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
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
