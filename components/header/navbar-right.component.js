"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useCartStore } from "@/stores/cart.store";
import CartPop from "../cart-card/cart-pop.component";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

// const navItems = [
//   {
//     text: "Home",
//     permalink: "home",
//     children: [
//       {
//         text: "Home-1",
//         permalink: "home-1",
//       },
//       {
//         text: "Home-1",
//         permalink: "home-1",
//       },
//     ],
//   },
//   {
//     text: "Mega Menu",
//     permalink: "mega-menu",
//     children: [
//       {
//         text: "Home-1",
//         permalink: "home-1",
//       },
//       {
//         text: "Home-1",
//         permalink: "home-1",
//       },
//     ],
//   },
//   {
//     text: "Full Screen Menu",
//     permalink: "full-screen-menu",
//   },
//   {
//     text: "Pages",
//     permalink: "pages",
//   },
//   {
//     text: "User Account",
//     permalink: "user-account",
//   },
//   {
//     text: "Vendor Account",
//     permalink: "vendor-account",
//   },
// ];

function NavbarRight(props) {
  const { window } = props;

  const { cartProducts, setCartProducts, removeCartProducts } = useCartStore();
  const router = useRouter();

  const [showCarts, setShowCarts] = useState(null);

  const handleCartPopClose = () => {
    setShowCarts(null);
  };

  const getLocalStorageCartProduct =
    typeof window !== "undefined" &&
    window.localStorage.getItem("cartProducts");

  // console.log("getLocalStorageCartProduct==", getLocalStorageCartProduct);

  useEffect(() => {
    if (!isEmpty(getLocalStorageCartProduct)) {
      setCartProducts(JSON.parse(getLocalStorageCartProduct));
    }
  }, [getLocalStorageCartProduct]);

  return (
    <>
      <CartPop
        showCarts={showCarts}
        anchorEl={showCarts}
        handleCartPopClose={handleCartPopClose}
      />

      <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <MailIcon
            sx={{
              color: "#aaa",
            }}
          />
        </IconButton>
        <IconButton>
          <AccountCircle
            sx={{
              color: "#aaa",
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={(event) => setShowCarts(event.currentTarget)}
        >
          <Badge badgeContent={cartProducts.length} color="error">
            <LocalMallOutlinedIcon
              sx={{
                color: "#aaa",
              }}
            />
          </Badge>
        </IconButton>
      </Box>
    </>
  );
}

export default NavbarRight;
