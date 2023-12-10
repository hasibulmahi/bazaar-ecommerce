import {
  AppBar,
  Box,
  Chip,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Select from "@mui/material/Select";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
function Toolbar(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#2B3445",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              py: 1,
            }}
          >
            <Chip
              sx={{
                color: "#FFF",
                marginRight: 1,
                px: 1,
                fontWeight: "600",
              }}
              label="HOT"
              size="small"
              color="error"
            />
            <Typography fontSize={13} color="#FFF">
              Free Express Shipping
            </Typography>
          </Box>
          <FormControl
            size="small"
            sx={{
              minWidth: "90px",
              marginLeft: "auto",
              mr: 2,
            }}
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>USD</MenuItem>
              <MenuItem value={20}>BDT</MenuItem>
              <MenuItem value={30}>RS</MenuItem>
            </Select>
          </FormControl>
          <IconButton>
            <FacebookOutlinedIcon
              fontSize="small"
              sx={{
                color: "#FFF",
              }}
            />
          </IconButton>
          <IconButton>
            <InstagramIcon
              fontSize="small"
              sx={{
                color: "#FFF",
              }}
            />
          </IconButton>
          <IconButton>
            <TwitterIcon
              fontSize="small"
              sx={{
                color: "#FFF",
              }}
            />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Toolbar;
