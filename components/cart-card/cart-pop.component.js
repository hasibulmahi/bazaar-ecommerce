import { useCartStore } from "@/stores/cart.store";
import { Box, Button, Popover, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function CartPop({ showCarts, anchorEl, handleCartPopClose, id }) {
  const { cartProducts, setCartProducts, removeCartProducts } = useCartStore();
  const calculateTotalPrice = (cartProducts) =>
    cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Popover
      id={"cart-popover"}
      open={showCarts}
      anchorEl={anchorEl}
      onClose={handleCartPopClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box
        sx={{
          minWidth: "300px",
          px: 2,
          py: 2,
        }}
      >
        {cartProducts &&
          cartProducts.map((item, i) => (
            <Box key={i}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <Image
                  src={item?.image}
                  width={70}
                  height={70}
                  alt="Cart-Card Img"
                />
                <Box
                  sx={{
                    ml: 1,
                  }}
                >
                  <Link href="/cart" underline="hover">
                    <Typography fontSize={15} fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Link>
                  <Typography fontSize={13}>Qty:{item.quantity}</Typography>
                  <Typography fontSize={14} fontWeight={500}>
                    Price: {item.price}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Box>
          ))}

        <Box>
          {cartProducts.length > 0 ? (
            <Typography sx={{
              color: "#D23F57"
            }}>
              Total Price: ${calculateTotalPrice(cartProducts).toFixed(2)}
            </Typography>
          ) : (
            <Typography>Cart is empty</Typography>
          )}
        </Box>
      </Box>
      <Box sx={{
        px: 1,
        py: 1
      }}>
      <Button sx={{
        display: "flex",
        justifyContent: "center"
      }} color="error" variant="outlined" href="/cart">View Cart</Button>
      </Box>
    </Popover>
  );
}

export default CartPop;
