import React, { useEffect } from "react";
import { IoSearchSharp } from 'react-icons/io5';
import { Kbd, InputGroup, InputLeftElement, InputRightElement, Input, useColorModeValue, Button } from "@chakra-ui/react";

const InputAsButton = ({ onOpen }) => {

    const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
    const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");

    useEffect(() => {
        const handleBodyKeyDown = (e) => {
            if (e.key === 's') {
                onOpen();
            }
        };
        document.body.addEventListener('keyup', handleBodyKeyDown);
    }, [onOpen]);

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<IoSearchSharp />} />
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
                }}>
                Search by Country
        </Input>
            <InputRightElement display={{ base: "none", lg: "flex" }} pointerEvents="none" children={<Kbd>s</Kbd>} />
        </InputGroup>
    );
};

export default InputAsButton;
