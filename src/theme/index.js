import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";

import styles from "./globalStyles";

import breakpoints from "./breakpoints";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  styles,
  config,
  colors,
  breakpoints,
});

export default theme;
