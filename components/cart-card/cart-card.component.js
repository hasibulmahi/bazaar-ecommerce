import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import React, { useState } from "react";
import BazaarButton from "../ui/button.component";
import { useCartStore } from "@/stores/cart.store";

function CartCard({ openCart, item, handleCloseCart }) {
  const [value, setValue] = useState(2);
  const { cartProducts, setCartProducts, removeCartProducts } = useCartStore();

  return (
    <Dialog
      onClose={handleCloseCart}
      fullWidth={true}
      open={openCart}
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          textAlign: "center",
        }}
      >
        Your Product
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={item?.image}
                width={300}
                height={300}
                alt="Cart-Card Img"
              />
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box>
              <Typography
                sx={{
                  mb: 1,
                }}
                fontSize={20}
                fontWeight={600}
              >
                {item?.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Rating
                  sx={{
                    mb: 1,
                  }}
                  name="simple-controlled"
                  size="medium"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />

                <Typography
                  sx={{
                    paddingLeft: 1,
                    fontSize: "15px",
                    color: "#7D879C",
                  }}
                >
                  (2)
                </Typography>
              </Box>
              <Typography mb={2} fontSize={15} color="#aab">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                le...
              </Typography>
              <Typography
                sx={{
                  color: "#D23F57",
                }}
                fontSize={20}
                fontWeight={600}
                mb={2}
              >
                ${item?.price} Only
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
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
                <Typography>{cartProducts.length}</Typography>
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
                      border: "1px solid red",
                      borderRadius: "1px",
                    }}
                  />
                </IconButton>
                <BazaarButton
                  text="Add to cart"
                  buttonSx={{
                    bgcolor: "transparent",
                    border: "1px solid #D8E0E9",
                    boxShadow: "none",
                    color: "#4B566B",
                    borderRadius: 1,
                    py: "2px",
                    marginLeft: 2,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default CartCard;
