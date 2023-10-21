import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import { footerMenus } from "./footer.seeds";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

function Footer(props) {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        color: "#FFF",
        px: 10,
        py: 8,
      }}
    >
      <Grid container spacing={5}>
        <Grid item sm={4}>
          <Box>
            <Image
              src="/bazaar-logo.png"
              width={100}
              height={50}
              alt="Play Store"
            />
            <Typography
              sx={{
                mb: 2,
              }}
              variant="body2"
              fontSize={13}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Image
                src="/play-store.png"
                width={150}
                height={50}
                alt="Play Store"
              />
              <Image
                src="/app-store.png"
                width={150}
                height={50}
                alt="App Store"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={2.6}>
          <Box>
            <Typography mb={2} variant="h5" fontWeight={600}>
              About Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexFlow: "column",
              }}
            >
              {footerMenus &&
                [...footerMenus].splice(0, 5).map((item, i) => {
                  return (
                    <Link
                      underline="none"
                      variant="text"
                      href={`/${item.href}`}
                      color={"#C1CDD7"}
                      fontSize={14}
                      mb={1}
                    >
                      {item.text}
                    </Link>
                  );
                })}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={2.6}>
          <Box>
            <Typography mb={2} variant="h5" fontWeight={600}>
              Customer Care
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexFlow: "column",
              }}
            >
              {footerMenus &&
                [...footerMenus].splice(5, 7).map((item, i) => {
                  return (
                    <Link
                      underline="none"
                      variant="text"
                      href={`/${item.href}`}
                      color={"#C1CDD7"}
                      fontSize={14}
                      mb={1}
                    >
                      {item.text}
                    </Link>
                  );
                })}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={2.6}>
          <Box>
            <Typography mb={2} variant="h5" fontWeight={600}>
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexFlow: "column",
              }}
            >
              <Typography mb={1} color={"#C1CDD7"} fontSize={12}>
                Corner View, Dhaka, Bangladesh
              </Typography>
              <Typography mb={1} color={"#C1CDD7"} fontSize={12}>
                Email: Bazaar@gmail.com
              </Typography>
              <Typography mb={1} color={"#C1CDD7"} fontSize={12}>
                Phone: +880123456789
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <IconButton>
                  <FacebookRoundedIcon
                    sx={{
                      color: "#FFF",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <TwitterIcon
                    sx={{
                      color: "#FFF",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <YouTubeIcon
                    sx={{
                      color: "#FFF",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <InstagramIcon
                    sx={{
                      color: "#FFF",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
