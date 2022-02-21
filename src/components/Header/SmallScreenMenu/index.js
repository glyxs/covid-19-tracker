import { Box, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorModeValue } from "@chakra-ui/react";
import ColorModeToggle from './../ColorModeToggle/index';
import { HiMenuAlt3 } from 'react-icons/hi';
import React from 'react';
import Logo from './../Logo';

const SmallScreenMenu = () => {

    const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
    const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");

    return (
        <Menu>
            <MenuButton as={IconButton}
                boxShadow="md"
                rounded='xl'
                aria-label="Open Side Menu"
                icon={<HiMenuAlt3 />}
                bg={bg}
                _hover={{
                    bg: bgHover
                }}
                _focus={{
                    bg: bg,
                    boxShadow: 'outline'
                }}
            />
            <MenuList zIndex="dropdown" boxShadow="2xl" border="none">
                <Box p={3} display={{ base: 'block', md: 'none' }} ><Logo /></Box>
                <MenuItem closeOnSelect={false} display={{ base: 'block', sm: 'none' }}><ColorModeToggle /></MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SmallScreenMenu;
