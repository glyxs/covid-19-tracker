import React, { useState } from "react";
import { useColorModeValue, Button, ModalBody, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, useDisclosure } from "@chakra-ui/react";
import InputAsButton from "./InputAsButton";
import SearchInput from "./SearchInput";
import FlagImage from '../FlagImage';

const SearchBar = ({ data, searchController }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
  const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");

  const [SearchTerm, setSearchTerm] = useState('');

  return (
    <>
      <InputAsButton onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={() => {
        onClose();
        setSearchTerm('');
      }}>
        <ModalOverlay />
        <ModalContent rounded="xl" p={3} bg={bg} mx={3}>
          <ModalHeader p={0}>
            <SearchInput setSearchTerm={setSearchTerm} />
          </ModalHeader>
          {data && <ModalBody
            p={0} mt={6}
            display={SearchTerm === '' ? "none" : "block"}
          >
            <VStack spacing={1}>
              {data && SearchTerm !== "" && data.filter((val) => {
                return val.country.toLowerCase().includes(SearchTerm.toLowerCase());
              }).map((val, key) => {
                return (
                  <Button
                    onClick={e => {
                      searchController(e, val.country);
                      onClose();
                      setSearchTerm('');
                    }}
                    value={val.iso3}
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
                    <FlagImage val={val} />
                    {val.country}
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
