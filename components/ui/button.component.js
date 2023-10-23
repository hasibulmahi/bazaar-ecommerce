import { useCartStore } from "@/stores/cart.store";
import { Button, IconButton } from "@mui/material";
import React from "react";

function BazaarButton({
  text = "Shop now",
  buttonSx,
  buttonVariant = "contained",
  className,
  item = {},
}) {
  const { cartProducts, setCartProducts, removeCartProducts } = useCartStore();
  console.log("cartProducts", cartProducts);
  return (
    <>
      <Button
        onClick={() => setCartProducts(item)}
        variant={buttonVariant}
        sx={{
          backgroundColor: "#2B3445",
          fontSize: "14px",
          textTransform: "capitalize",
          borderRadius: "0px",
          px: "40px",
          py: "12px",
          ...buttonSx,
        }}
        className={className}
      >
        {text}
      </Button>
      <br />
      <Button onClick={() => removeCartProducts(item)}>remove</Button>
    </>
  );
}

export default BazaarButton;
