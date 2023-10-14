import { mode } from "@chakra-ui/theme-tools";
import { lighten, darken } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    "html, body": {
      backgroundColor: mode("gray.50", "gray.900")(props),
      color: mode("gray.800", "gray.100")(props),
    },
    ".js-focus-visible :focus:not([data-focus-visible-added])": {
      outline: "none",
      boxShadow: "none",
    },
    ".ButtonLink": {
      textDecoration: "none !important",
    },
    "button, textarea, input, select, a": {
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "transparent",
    },
    ".leaflet-touch .leaflet-bar": {
      border: "none",
    },
    ".leaflet-touch .leaflet-bar a:first-of-type": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      backgroundColor: mode("white", "gray.800")(props),
      color: mode("gray.700", "gray.200")(props),
      boxShadow: "xl",
      _hover: {
        backgroundColor: mode(
          darken("gray.200", 10),
          lighten("gray.700", 10),
        )(props),
      },
      _focus: {
        boxShadow: "outline",
      },
    },
    ".leaflet-touch .leaflet-bar a:last-of-type": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      backgroundColor: mode("white", "gray.800")(props),
      color: mode("gray.700", "gray.200")(props),
      boxShadow: "xl",
      _hover: {
        backgroundColor: mode(
          darken("gray.200", 10),
          lighten("gray.700", 10),
        )(props),
      },
      _focus: {
        boxShadow: "outline",
      },
    },
    ".leaflet-popup-content": {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      margin: "10px",
      marginRight: "25px",
    },
    ".leaflet-popup-content img": {
      width: "20px",
      height: "13px",
      marginRight: "5px",
    },
    ".leaflet-popup-content p": {
      margin: "5px 0 0 0",
      fontWeight: "700",
    },
    ".leaflet-popup-content .title": {
      display: "flex",
      flexDirection: "row",
      fontSize: "16px",
      fontWeight: "700",
      alignItems: "baseline",
    },
    ".leaflet-popup-content-wrapper, .leaflet-popup-tip": {
      background: "rgba(0, 0, 0, 0.8)",
      color: "white",
    },
  }),
};
export default styles;
