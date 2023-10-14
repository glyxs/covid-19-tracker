import ColorModeToggle from "./ColorModeToggle/index";
import SmallScreenMenu from "./SmallScreenMenu";
import { Flex, Box } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import React from "react";
import Logo from "./Logo";

const Header = ({ searchData, searchController }) => {
  return (
    <Flex py={6} alignItems="center">
      <Box mr="6" minW={200} display={{ base: "none", md: "block" }}>
        <Logo />
      </Box>
      <Box flex={1} w={{ base: "75vw", md: "20vw" }} justifySelf="center">
        <SearchBar searchController={searchController} data={searchData} />
      </Box>
      <Box ml="4" display={{ base: "none", sm: "block" }}>
        <ColorModeToggle />
      </Box>
      <Box ml="4" display={{ base: "block", lg: "none" }}>
        <SmallScreenMenu />
      </Box>
    </Flex>
  );
};

export default Header;
