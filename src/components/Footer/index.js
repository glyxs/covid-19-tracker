import {
  Flex,
  Text,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import React from "react";
import PopupForm from "./PopupForm";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <Flex
        mb={6}
        color={color}
        fontWeight="600"
        wrap="wrap"
        justifyContent="space-between"
        mx={-6}
      >
        <Text flexGrow={{ base: 1, md: 0 }} mx={6} my={3} textAlign="center">
          Source:{" "}
          <Link
            isExternal={true}
            href="https://www.worldometers.info/coronavirus/"
          >
            Worldometers
          </Link>
          ,{" "}
          <Link
            isExternal={true}
            href="https://github.com/CSSEGISandData/COVID-19"
          >
            JHUCSSE
          </Link>
        </Text>
        <Text flexGrow={1} mx={6} my={3} textAlign="center">
          Designed and developed by{" "}
          <Link isExternal={true} href="https://stepanpavlov.com">
            Stepan Pavlov
          </Link>
        </Text>
        <Box flexGrow={{ base: 1, md: 0 }} mx={6} my={3} textAlign="center">
          <Button onClick={onOpen} variant="link" color={color}>
            Report a bug
          </Button>
        </Box>
      </Flex>
      <PopupForm onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Footer;
