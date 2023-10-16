import React from "react";
import { trendingList } from "./trending-seeds";
import Image from "next/image";
import { Box, Grid, IconButton,  } from "@mui/material";
import TrendingCard from "./tending-card";

const trendingBgCardColor = ["#F4F7FB", "#2B3445", "#EDEBEC"];
const trendingTextCardColor = ["#2B3445", "#FFF", "#2B3445"]

function Trending({ tendingSx }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",


      }}
    >
      {trendingList &&
        trendingList.map((item, i) => (
          <Grid item sm={4} key={i}>
            <TrendingCard
              title={item.title}
              subtitle1={item.subtitle1}
              subtitle2={item.subtitle2}
              btn={item.btn}
              cardImage={item.image}
              tendingSx={{
                bgcolor: `${trendingBgCardColor[i]}`,
                color: `${trendingTextCardColor[i]}`
              }}
            />
          </Grid>
        ))}
    </Grid>
    //   {/* Grid item start */}
    // </Grid>
  );
}

export default Trending;
