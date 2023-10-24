import CartPop from "@/components/cart-card/cart-pop.component";
import Layout from "@/components/layout";
import BazaarButton from "@/components/ui/button.component";
import { useCartStore } from "@/stores/cart.store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { common } from "@mui/material/colors";

function Home(props) {
  const { cartProducts, setCartProducts, removeCartProducts } = useCartStore();

  return (
    <>
      <Layout>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            px: 3,
            py: 3,
          }}
        >
          <BazaarButton
            text="1. Cart"
            buttonSx={{
              backgroundColor: "#D23F57",
              fontSize: "14px",
              borderRadius: 10,
              boxShadow: "none",
              px: "25px",
              py: "8px",
            }}
          />
          <BazaarButton
            buttonSx={{
              backgroundColor: "#FCE9EC",
              color: "#D23F57",
              borderRadius: 10,
              boxShadow: "none",
              px: "25px",
              py: "8px",
            }}
            text="2. Delivery Info"
          />
          <BazaarButton
            buttonSx={{
              backgroundColor: "#FCE9EC",
              color: "#D23F57",
              borderRadius: 10,
              boxShadow: "none",
              px: "25px",
              py: "8px",
            }}
            text="3. Payment"
          />
          <BazaarButton
            buttonSx={{
              backgroundColor: "#FCE9EC",
              color: "#D23F57",
              borderRadius: 10,
              boxShadow: "none",
              px: "25px",
              py: "8px",
            }}
            text="4. Review"
          />
        </Box>
        <Grid container>
          <Grid item sm={6}>
            <Box>
              {cartProducts &&
                cartProducts.map((item, i) => (
                  <Box
                    sx={{
                      background: common.white,
                      mb: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Grid container>
                      <Grid item sm={3}>
                        <Box py={2}>
                          <Image
                            src={item?.image}
                            width={70}
                            height={70}
                            alt="Cart-Card Img"
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={6}>
                        <Box>
                          <Typography fontSize={15}>{item?.title}</Typography>
                          <Typography fontSize={14} color={"#aaa"} mt={2}>
                            {item?.price} * {item?.quantity}{" "}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item sm={3}>
                        <Box
                          sx={{
                            textAlign: "end",
                          }}
                        >
                          <IconButton onClick={() => removeCartProducts(item)}>
                            <ClearIcon />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                          }}
                        >
                          <IconButton
                            sx={{
                              mr: 2,
                            }}
                            aria-label="reduce"
                            onClick={() => removeCartProducts(item)}
                          >
                            <RemoveIcon
                              fontSize="medium"
                              sx={{
                                color: "#D23F57",
                                border: "1px solid #D23F57",
                                borderRadius: "1px",
                              }}
                            />
                          </IconButton>
                          <Typography>{item.quantity}</Typography>
                          <IconButton
                            sx={{
                              ml: 2,
                            }}
                            aria-label="increase"
                            onClick={() => setCartProducts(item)}
                          >
                            <AddIcon
                              sx={{
                                bgcolor: "#D23F57",
                                color: "#FFF",
                                border: "1px solid #D23F57",
                                borderRadius: "1px",
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BazaarButton
                  buttonSx={{
                    backgroundColor: "#D23F57 ",
                    borderRadius: 2,
                    boxShadow: "none",
                    px: "150px",
                    py: "8px",
                    mb: 2,
                  }}
                  text="Next - Delivery Address"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={4}></Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Home;
