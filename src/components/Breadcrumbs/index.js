import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {
    HStack,
    Heading,
    Button
} from "@chakra-ui/react";

const Breadcrumbs = ({ country, SearchController }) => {

    return (
        <HStack spacing={2} alignItems="baseline" mb={6}>
            <Button
                p={0}
                size="xs"
                _focus={{
                    bg: "transparent",
                    outline: "none"
                }}
                _hover={{
                    bg: "transparent",
                    outline: "none"
                }}
                bg="transparent"
                fontWeight={600}
                fontSize="xl"
                lineHeight={1}
                cursor="pointer"
                value=''
                onClick={e => {
                    SearchController(e, '');
                }}
            >Global</Button>
            <FiChevronRight />
            <Heading fontWeight={600} as='h3' size='md' lineHeight={1}>{country && country}</Heading>
            {country !== '' && <FiChevronRight />}
        </HStack>
    );
};

export default Breadcrumbs;
