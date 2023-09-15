import { Button, IconButton } from "@mui/material";
import React from "react";

function BazaarButton({
  text = "Shop now",
  buttonSx,
  buttonVariant = "contained",
}) {
  return (
    <Button
      variant={buttonVariant}
      sx={{
        ...buttonSx,
      }}
    >
      {text}
    </Button>
  );
}

export default BazaarButton;
