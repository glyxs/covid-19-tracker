import { lighten, darken } from '@chakra-ui/theme-tools';
import ColorModeToggle from './../ColorModeToggle/index';
import { HiMenuAlt3 } from 'react-icons/hi';
import React from 'react';
import Logo from './../Logo';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorMode,
    useColorModeValue,
    Box,
    Link,
} from "@chakra-ui/react";

const SmallScreenMenu = () => {

    const { colorMode } = useColorMode();
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Menu>
            <MenuButton as={IconButton}
                rounded='xl'
                aria-label="Open Side Menu"
                icon={<HiMenuAlt3 />}
                bg={bg}
                _hover={{
                    bg: colorMode === "light" ? darken(bg, 10) : lighten(bg, 10)
                }}
                _focus={{
                    bg: bg,
                    boxShadow: 'outline'
                }}
            />
            <MenuList zIndex={999} boxShadow="2xl">
                <Box p={3} display={{ base: 'block', md: 'none' }} ><Logo /></Box>
                <MenuItem as={Link} href='https://stepanpavlov.com' isExternal={true}>About the author</MenuItem>
                <MenuItem as={Link} href="https://github.com/glyxs/covid-19-tracker" isExternal={true}>GitHub repository</MenuItem>
                <MenuItem closeOnSelect={false} display={{ base: 'block', sm: 'none' }}><ColorModeToggle /></MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SmallScreenMenu;
