import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { HStack, Heading, Button, Tooltip } from "@chakra-ui/react";

const Breadcrumbs = ({ country, searchController }) => {

    return (
        <HStack spacing={2} alignItems="baseline" mb={6}>
            <Tooltip rounded="lg" label={country && country !== '' ? "Show global summary" : "Showing global summary"} >
                <Button
                    p={0}
                    size="xs"
                    variant="link"
                    bg="transparent"
                    fontWeight={600}
                    fontSize="xl"
                    lineHeight={1}
                    cursor="pointer"
                    value=''
                    onClick={e => {
                        searchController(e, '');
                    }}
                >Global</Button>
            </Tooltip>
            <FiChevronRight />
            <Heading fontWeight={600} as='h3' size='md' lineHeight={1}>{country && country}</Heading>
            {country && country !== '' && <FiChevronRight />}
        </HStack>
    );
};

export default Breadcrumbs;
