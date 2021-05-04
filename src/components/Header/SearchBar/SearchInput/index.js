import React from "react";
import { IoSearchSharp } from 'react-icons/io5';
import { InputGroup, InputLeftElement, Input, useColorModeValue } from "@chakra-ui/react";

const SearchInput = ({ setSearchTerm }) => {

    const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
    const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<IoSearchSharp />} />
            <Input
                onChange={
                    e => { setSearchTerm(e.target.value); }
                }
                type="text"
                placeholder="Search by Country"
                variant="filled"
                bg={bg}
                _hover={{
                    bg: bgHover,
                }}
                _focus={{
                    bg: bg,
                }}
            />
        </InputGroup>
    );
};

export default SearchInput;
