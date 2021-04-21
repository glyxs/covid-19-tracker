import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { lighten, darken } from "@chakra-ui/theme-tools";

const SearchBar = ({ type, icon, placeholder, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.50", "gray.900");
  const bgHover = useColorModeValue(darken(bg, 10), lighten(bg, 10));

  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={icon} />
        <Input
          as={Button}
          boxShadow="md"
          justifyContent="start"
          fontWeight={400}
          onClick={onOpen}
          rounded="xl"
          variant="filled"
          bg={bg}
          _hover={{
            bg: bgHover,
          }}
          _focus={{
            bg: bg,
            boxShadow: "outline",
          }}
        >
          {placeholder}
        </Input>
      </InputGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="xl" p={3} bg={bg2} mx={3}>
          <ModalHeader p={0}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={icon} />
              <Input
                type={type}
                placeholder={placeholder}
                variant="filled"
                bg={bg}
                boxShadow="2xl"
                _hover={{
                  bg: bgHover,
                }}
                _focus={{
                  bg: bg,
                }}
              />
            </InputGroup>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBar;
