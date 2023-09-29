import { Button, IconButton } from "@mui/material";
import React from "react";

function BazaarButton({
  text = "Shop now",
  buttonSx,
  buttonVariant = "contained",
  className,
}) {
  return (
    <Button
      variant={buttonVariant}
      sx={{
        backgroundColor: "#2B3445",
        fontSize: "14px",
        textTransform: "capitalize",
        borderRadius: "0px",
        px: "40px",
        py: "12px",
        ...buttonSx,
      }}
      className={className}
    >
      {text}
    </Button>
  );
}

export default BazaarButton;
