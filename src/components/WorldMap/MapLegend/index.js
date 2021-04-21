import { Heading, SimpleGrid, Stack, Box } from '@chakra-ui/react';
import React from 'react';

const MapLegend = () => {
    return (
        <SimpleGrid columns={{ sm: 1, md: 2 }} mb={3}>
            <Box mb={{ sm: 3, md: 0 }}>
                <Heading fontWeight={600} as='h3' size='md' mb={{ base: 3, md: 0 }}>COVID-19 Affected Areas</Heading>
            </Box>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} justifySelf={{ sm: "left", md: "right" }} align={{ base: 'left', sm: 'center' }}>
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
        </SimpleGrid>
    );
};

export default MapLegend;
