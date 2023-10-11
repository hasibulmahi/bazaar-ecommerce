import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import EastIcon from "@mui/icons-material/East";

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
        minWidth: "350px",
        bgcolor: "#F3EFEC",
        padding: "0px",
        position: "relative",
        marginBottom: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        mt: 5,
        // bgcolor: `${trendingCardColor[i]}`,
        ...tendingSx,
      }}
    >
      <Box
        sx={{
          ml: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          {subtitle1}
        </Typography>
        <Typography>{subtitle2}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
            }}
          >
            {btn}
          </Typography>
          <IconButton>
            <EastIcon
              sx={{
                color: "#2B3445",
              }}
              fontSize="small"
            />
          </IconButton>
        </Box>
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
