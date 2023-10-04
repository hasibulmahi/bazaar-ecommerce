import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function TrendingCard({
  title,
  subtitle1,
  subtitle2,
  btn,
  cardImage,
  tendingSx,
}) {
  return (
    <Box
      sx={{
        minHeight: "155px",
        minWidth: "380px",
        bgcolor: "#F3EFEC",
        padding: "0px",
        position: "relative",
        marginBottom: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        // bgcolor: `${trendingCardColor[i]}`,
        ...tendingSx,
      }}
    >
      <Box>
        <Typography>{title}</Typography>
        <Typography>{subtitle1}</Typography>
        <Typography>{subtitle2}</Typography>
        <IconButton>{btn}</IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      >
        <Image src={cardImage} width={100} height={100} alt="img" />
      </Box>
    </Box>
  );
}

export default TrendingCard;
