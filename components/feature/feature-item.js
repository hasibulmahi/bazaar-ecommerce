import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import CreditScoreSharpIcon from "@mui/icons-material/CreditScoreSharp";

export const featureItem = [
  {
    icon: (
      <LocalShippingIcon
        sx={{
          fontSize: "36px",
        }}
      />
    ),
    title: "Fast Delivery",
    subtitle: "Start from 10$",
  },
  {
    icon: (
      <MonetizationOnOutlinedIcon
        sx={{
          fontSize: "36px",
        }}
      />
    ),
    title: "Money Guarantee",
    subtitle: "7 Days Back",
  },
  {
    icon: (
      <AvTimerOutlinedIcon
        sx={{
          fontSize: "36px",
        }}
      />
    ),
    title: "365 Days",
    subtitle: "For Free Return",
  },
  {
    icon: (
      <CreditScoreSharpIcon
        sx={{
          fontSize: "36px",
        }}
      />
    ),
    title: "Payment",
    subtitle: "Secure Payment",
  },
];
