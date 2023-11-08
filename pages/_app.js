import "@/styles/globals.css";
import { ThemeOptions } from "@/theme";

import { ThemeProvider, createTheme } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ThemeOptions}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
