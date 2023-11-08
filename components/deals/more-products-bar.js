import { Box, IconButton, Typography } from "@mui/material";

import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { dealList } from "./deals.seeds";
import Image from "next/image";
import BazaarButton from "../ui/button.component";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

function MoreProductsBar({
  barTitle = "Deals of the day",
  moreProductText = "More Products",
  moreProductLink = "",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 1,
      }}
    >
      <Typography
        sx={{
          color: "#2B3445",
        }}
        fontSize={15}
        fontWeight={600}
      >
        {barTitle}
      </Typography>

      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href={moreProductLink} passHref legacyBehavior>
          <Typography
            sx={{
              fontSize: "14px",
              textDecoration: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {moreProductText}
            <EastIcon
              sx={{
                color: "#2B3445",
                display: "inline-flex",
                ml: 1,
              }}
              fontSize="small"
            />
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default MoreProductsBar;
