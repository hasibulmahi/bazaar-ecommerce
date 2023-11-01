"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

const NavbarRight = dynamic(() => import("./navbar-right.component"), {
  ssr: false,
});
import Link from "next/link";
import dynamic from "next/dynamic";

const drawerWidth = 240;
const navItems = [
  {
    text: "Home",
    permalink: "home",
    children: [
      {
        text: "Home-1",
        permalink: "home-1",
      },
      {
        text: "Home-1",
        permalink: "home-1",
      },
    ],
  },
  {
    text: "Mega Menu",
    permalink: "mega-menu",
    children: [
      {
        text: "Home-1",
        permalink: "home-1",
      },
      {
        text: "Home-1",
        permalink: "home-1",
      },
    ],
  },
  {
    text: "Full Screen Menu",
    permalink: "full-screen-menu",
  },
  {
    text: "Pages",
    permalink: "pages",
  },
  {
    text: "User Account",
    permalink: "user-account",
  },
  {
    text: "Vendor Account",
    permalink: "vendor-account",
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bazaar
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} id={item.permalink}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [dropdownEl, setDropDownEl] = React.useState(null);
  const dropDownOpen = Boolean(dropdownEl);

  const handleCloseDropDown = () => {
    setDropDownEl(null);
  };

  React.useEffect(() => {
    const getLocalStorageCartProduct =
      typeof window !== "undefined" &&
      window.localStorage.getItem("cartProducts");
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          bgcolor: "#FFF",
          boxShadow: "none",
        }}
        position="static"
      >
        <Container>
          <Toolbar
            sx={{
              px: "0 !important",
              display: "flex",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href={"/"}>
              <Image src="/bazaar-logo.png" width={70} height={30} alt="Logo" />
            </Link>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                },
              }}
            >
              {navItems.map((item, i) => (
                <>
                  <Button
                    id={`basic-button-${i}`}
                    sx={{
                      textTransform: "capitalize",
                      marginRight: "30px",
                      color: "#000",
                    }}
                    key={i}
                    // onClick={handleClickDropDown}
                    onClick={(event) => {
                      if (item.hasOwnProperty("children")) {
                        setDropDownEl(event.currentTarget);
                      }
                    }}
                    aria-controls={dropDownOpen ? `basic-menu-${i}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={dropDownOpen ? "true" : undefined}
                    // href={`#${item.permalink}`}
                  >
                    {item.text}
                    {item.hasOwnProperty("children") && (
                      <KeyboardArrowDownIcon />
                    )}
                  </Button>
                  <Menu
                    id={`basic-menu-${i}`}
                    anchorEl={dropdownEl}
                    open={dropDownOpen}
                    onClose={handleCloseDropDown}
                    MenuListProps={{
                      "aria-labelledby": `basic-button-${i}`,
                    }}
                  >
                    <MenuItem onClick={handleCloseDropDown}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      My account
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>Logout</MenuItem>
                  </Menu>
                </>
              ))}
            </Box>

            <NavbarRight />
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
