import { Heading, Flex, Stack, Box, Spacer } from '@chakra-ui/react';
import React from 'react';

const MapLegend = () => {
    return (
        <Flex direction={{ base: 'column', sm: 'row' }} mb={3}>
            <Box >
                <Heading fontWeight={600} as='h3' size='md' mb={{ base: 3, sm: 0 }}>Affected Areas</Heading>
            </Box>
            <Spacer />
            <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={3}
                justifySelf={{ sm: "left", md: "right" }}
                alignSelf={{ base: 'left', sm: 'center' }}>
                <Box display="flex">
                    <Box bg='#990800' w={5} h={5} rounded='md' boxShadow="dark-lg"></Box>
                    <Heading fontWeight={500} as='h6' size='xs' ml={1}>- Most Affected</Heading>
                </Box>
                <Box display="flex">
                    <Box bg='#FFB6B3' w={5} h={5} rounded='md' boxShadow="dark-lg"></Box>
                    <Heading fontWeight={500} as='h6' size='xs' ml={1}>- Least Affected</Heading>
                </Box>
                <Box display="flex">
                    <Box bg='white' w={5} h={5} rounded='md' boxShadow="dark-lg"></Box>
                    <Heading fontWeight={500} as='h6' size='xs' ml={1}>- No Data</Heading>
                </Box>
            </Stack>
        </Flex>
    );
};

export default MapLegend;
