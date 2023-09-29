import React from 'react';
import { trendingList } from './trending-seeds';
import Image from 'next/image';
import { Box, Grid, IconButton, Typography } from '@mui/material';

function Trending(props) {
    return (
        <Grid
        sx={
          {
            // paddingLeft: 5,
          }
        }
        item
        sm={4}
      >
        {trendingList &&
          trendingList.map((item, i) => (
            <Box
              key={i}
              sx={{
                minHeight: "155px",
                bgcolor: "#F3EFEC",
                padding: "0px",
                position: "relative",
                marginBottom: 2,
              }}
            >
              <Box >
              <Typography>{item.title}</Typography>
              <Typography>{item.subtitle1}</Typography>
              <Typography>{item.subtitle2}</Typography>
              <IconButton>{item.btn}</IconButton>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              >
                <Image src={item.image} width={100} height={100} alt="img" />
              </Box>
            </Box>
          ))}
      </Grid>
    //   {/* Grid item start */}
    // </Grid>
    );
}

export default Trending;