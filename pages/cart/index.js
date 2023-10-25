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
import React, { useEffect, useState } from "react";
import { common } from "@mui/material/colors";
import { isEmpty } from "lodash";

function Home(props) {
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
          <Button
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
          </Button>
          <Button
            sx={{
              backgroundColor: "#FCE9EC",
              color: "#D23F57",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: 10,
              boxShadow: "none",
              px: "25px",
              py: "8px",
              textTransform: "capitalize",
            }}
          >
            3. Payment
          </Button>
          <Button
            sx={{
              backgroundColor: "#FCE9EC",
              color: "#D23F57",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: 10,
              boxShadow: "none",
              px: "25px",
              py: "8px",
              textTransform: "capitalize",
            }}
          >
            4. Review
          </Button>
        </Box>
        <Grid container>
          <Grid item sm={6}>
            <Box>
              {cartProductList &&
                cartProductList.map((item, i) => (
                  <Box
                    sx={{
                      background: common.white,
                      mb: 2,
                      borderRadius: 2,
                      py: 2,
                      px: 1,
                      maxWidth: "600px",
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
          <Grid item sm={6}>
            <Box
              sx={{
                background: common.white,
                borderRadius: 2,
              }}
            >
              <Box>
                <Typography fontSize={14}>
                  Subtotal: {calculateTotalPrice(cartProductList).toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Home;
