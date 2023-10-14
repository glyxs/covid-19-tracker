import { Box, Image } from "@chakra-ui/react";
import VirusPNG from "./VirusLogo.png";
import LogoSvg from "./LogoSVG";
import React from "react";

const Logo = () => {
  return (
    <Box display="flex" alignItems="center">
      <Image w="60px" src={VirusPNG} alt="COVID-19 Logo" />
      <LogoSvg />
    </Box>
  );
};

export default Logo;
