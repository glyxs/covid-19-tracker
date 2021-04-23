import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import { lighten, darken } from '@chakra-ui/theme-tools';
import React from 'react';

const IconLinkButton = ({ href, text, icon }) => {

    const bg = useColorModeValue("white", "gray.800");
    const bgHover = useColorModeValue(darken(bg, 10), lighten(bg, 10));

    return (
        <Button as={Link}
            className="ButtonLink"
            boxShadow="md"
            href={href}
            isExternal={true}
            leftIcon={text ? icon : null}
            display={{ base: 'none', md: 'flex' }}
            rounded='xl'
            p={text ? 3 : 1}
            bg={bg}
            _hover={{
                bg: bgHover
            }}
            _focus={{
                bg: bg,
                boxShadow: 'outline'
            }}
        >{text ? text : icon}</Button>
    );
};

export default IconLinkButton;
