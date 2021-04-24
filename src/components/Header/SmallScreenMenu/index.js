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
                <MenuItem isFocusable={false} display={{ base: 'block', md: 'none' }}><Logo /></MenuItem>
                <MenuItem>About the author</MenuItem>
                <MenuItem>GitHub repository</MenuItem>
                <MenuItem closeOnSelect={false} display={{ base: 'block', sm: 'none' }}><ColorModeToggle /></MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SmallScreenMenu;
