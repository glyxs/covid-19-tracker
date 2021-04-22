import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  Button,
  ModalBody,
  VStack,
  Box
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { lighten, darken } from "@chakra-ui/theme-tools";

const SearchBar = ({ type, icon, placeholder, data, SearchController }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.50", "gray.900");
  const bgHover = useColorModeValue(darken(bg, 10), lighten(bg, 10));

  const [SearchTerm, setSearchTerm] = useState('');

  const CountryData = data;

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
      <Modal isOpen={isOpen} onClose={() => {
        onClose();
        setSearchTerm('');
      }}>
        <ModalOverlay />
        <ModalContent rounded="xl" p={3} bg={bg2} mx={3}>
          <ModalHeader p={0}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={icon} />
              <Input
                onChange={
                  e => { setSearchTerm(e.target.value); }
                }
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
          {data !== null && <ModalBody
            p={0} mt={6}
            display={SearchTerm === '' ? "none" : "block"}
          >
            <VStack spacing={1}>
              {SearchTerm !== "" && CountryData.filter((val) => {
                if (val.properties.ADMIN.toLowerCase().includes(SearchTerm.toLowerCase())) {
                  return val;
                }
              }).map((val, key) => {
                return (
                  <Button
                    onClick={e => { SearchController(e); onClose(); setSearchTerm(''); }}
                    value={val.properties.ISO_A3}
                    key={key}
                    w="100%"
                    justifyContent="left"
                    bg={bg}
                    _hover={{
                      bg: bgHover
                    }}
                    _focus={{
                      bg: bg,
                      boxShadow: 'outline'
                    }}
                  >
                    {(val.properties.flag &&
                      <Box mr={3}>
                        <img
                          src={val.properties.flag}
                          alt={val.properties.ADMIN}
                          height="20px" width="34px" />
                      </Box>) || <Box h="20px" w="34px" bg={bg2} mr={3}>?</Box>
                    }
                    {val.properties.ADMIN}
                  </Button>
                );
              })}
            </VStack>
          </ModalBody>}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBar;
