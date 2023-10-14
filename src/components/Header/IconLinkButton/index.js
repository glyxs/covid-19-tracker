import { Button, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const IconLinkButton = ({ href, text, icon }) => {
  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
  const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");

  return (
    <Button
      as={Link}
      className="ButtonLink"
      boxShadow="md"
      href={href}
      isExternal={true}
      leftIcon={text ? icon : null}
      display={{ base: "none", md: "flex" }}
      rounded="xl"
      p={text ? 3 : 1}
      bg={bg}
      _hover={{
        bg: bgHover,
      }}
      _focus={{
        bg: bg,
        boxShadow: "outline",
      }}
    >
      {text ? text : icon}
    </Button>
  );
};

export default IconLinkButton;
