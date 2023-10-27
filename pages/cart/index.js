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
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { common } from "@mui/material/colors";
import { isEmpty } from "lodash";
import styled from "@emotion/styled";

function Home(props) {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const {
    cartProducts,
    setCartProducts,
    removeCartProducts,
    removeSameCartProducts,
    isCartEmpty,
  } = useCartStore();
  const [cartProductList, setCartProductList] = useState(null);
  const calculateTotalPrice = (cartProductList) => {
    if (!isEmpty(cartProductList)) {
      return cartProductList.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    } else {
      return 0;
    }
  };

  const CartButton = styled(Button)(({ buttonSx }) => ({
    backgroundColor: "#FCE9EC",
    fontSize: "14px",
    fontWeight: "600",
    color: "#D23F57",
    borderRadius: "20px",
    boxShadow: "none",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "8px",
    paddingBottom: "8px",
    textTransform: "capitalize",
    ...buttonSx,
  }));

  useEffect(() => {
    setCartProductList(cartProducts);
  }, [cartProducts]);
  console.log("cartProductList", cartProductList);

  return (
    <>
      <Layout
        layoutSx={{
          bgcolor: "#F4F7FB",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              px: 3,
              py: 3,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#D23F57",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: 10,
                boxShadow: "none",
                px: "25px",
                py: "8px",
                color: "#FFF",
                textTransform: "capitalize",
              }}
            >
              1. Cart
            </Button>
            <CartButton
              buttonSx={{
                backgroundColor: "#129",
              }}
            >
              2. Delivery Info
            </CartButton>
            {/* <Button
              sx={{
                backgroundColor: "#FCE9EC",
                fontSize: "14px",
                fontWeight: "600",
                color: "#D23F57",
                borderRadius: 10,
                boxShadow: "none",
                px: "25px",
                py: "8px",
                textTransform: "capitalize",
              }}
            >
              2. Delivery Info
            </Button> */}
            <CartButton>3. Payment</CartButton>
            <CartButton>4. Review</CartButton>
          </Box>
          <Grid container columnSpacing={2}>
            <Grid item sm={8}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                {cartProductList &&
                  cartProductList.map((item, i) => (
                    <Box
                      sx={{
                        background: common.white,
                        mb: 2,
                        borderRadius: 2,
                        py: 2,
                        px: 1,
                      }}
                    >
                      <Grid container>
                        <Grid item sm={3}>
                          <Box>
                            <Image
                              src={item?.image}
                              width={70}
                              height={70}
                              alt="Cart-Card Img"
                            />
                          </Box>
                        </Grid>
                        <Grid item sm={6}>
                          <Box textAlign={"start"}>
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
                            {isCartEmpty ? (
                              <Typography>Your Cart is Empty</Typography>
                            ) : (
                              <IconButton
                                onClick={() => removeSameCartProducts(item)}
                              >
                                <ClearIcon fontSize="small" />
                              </IconButton>
                            )}
                            {/* <IconButton
                            onClick={() => removeSameCartProducts(item)}
                          >
                            <ClearIcon fontSize="small" />
                          </IconButton> */}
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
                                fontSize="small"
                                sx={{
                                  color: "#D23F57",
                                  border: "2px solid #FCE9EC",
                                  borderRadius: "5px",
                                }}
                              />
                            </IconButton>
                            <Typography fontSize={14}>
                              {item?.quantity}
                            </Typography>
                            <IconButton
                              sx={{
                                ml: 2,
                              }}
                              aria-label="increase"
                              onClick={() => setCartProducts(item)}
                            >
                              <AddIcon
                                fontSize="small"
                                sx={{
                                  color: "#D23F57",
                                  border: "2px solid #FCE9EC",
                                  borderRadius: "5px",
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
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                      backgroundColor: "#D23F57",
                      borderRadius: 2,
                      boxShadow: "none",
                      color: "#FFF",
                      fontSize: "14px",
                      textTransform: "initial",
                    }}
                  >
                    Next - Delivery Address
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Box
                sx={{
                  background: common.white,
                  borderRadius: 2,
                  px: "25px",
                  py: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box>
                    <Typography mb={1} fontSize={14}>
                      Subtotal:{" "}
                    </Typography>
                    <Typography mb={1} fontSize={14}>
                      Shipping:{" "}
                    </Typography>
                    <Typography mb={1} fontSize={14}>
                      Tax:{" "}
                    </Typography>
                    <Typography mb={1} fontSize={14}>
                      Discount:{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginLeft: "auto",
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "end",
                    }}
                  >
                    <Typography mb={1} fontSize={14}>
                      {calculateTotalPrice(cartProductList).toFixed(2)}
                    </Typography>
                    <Typography mb={1} fontSize={14}>
                      -
                    </Typography>
                    <Typography mb={1} fontSize={14}>
                      -
                    </Typography>
                    <Typography mb={1} fontSize={14}>
                      -
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography mb={1} fontSize={14}>
                    Total:
                  </Typography>
                  <Typography
                    mb={1}
                    fontSize={14}
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    {calculateTotalPrice(cartProductList).toFixed(2)}
                  </Typography>
                </Box>
                <Divider />

                <Box mb={2}>
                  <Typography mb={1} fontSize={14}>
                    Additional Comments
                  </Typography>
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      fontSize: "10px",
                    }}
                    id="outlined-basic"
                    // label="Write Here"
                    variant="outlined"
                  />
                </Box>
                <Divider />
                <Box>
                  <Typography fontSize={14} mb={1}>
                    Shipping Estimate
                  </Typography>
                  <Box>
                    <Typography mb={1} fontSize={14}>
                      Country
                    </Typography>

                    <FormControl fullWidth>
                      <Select onChange={handleCountryChange} value={country}>
                        <MenuItem value={10}>United State</MenuItem>
                        <MenuItem value={20}>England</MenuItem>
                        <MenuItem value={30}>Australia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography mb={1} fontSize={14}>
                      State
                    </Typography>

                    <FormControl fullWidth>
                      <Select onChange={handleCountryChange} value={country}>
                        <MenuItem value={10}>United State</MenuItem>
                        <MenuItem value={20}>England</MenuItem>
                        <MenuItem value={30}>Australia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography mb={1} fontSize={14}>
                      Zip
                    </Typography>

                    <FormControl fullWidth>
                      <Select onChange={handleCountryChange} value={country}>
                        <MenuItem value={10}>United State</MenuItem>
                        <MenuItem value={20}>England</MenuItem>
                        <MenuItem value={30}>Australia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Home;
