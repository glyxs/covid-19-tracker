import { Skeleton, useColorModeValue, Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import React from 'react';

const RateStat = ({ label, value, icon, isLoaded, num, numColor }) => {

    const color = useColorModeValue("gray.600", "gray.400");

    return (
        <Flex alignItems="center" justifyContent="space-between" h="100%">
            <Flex direction="column" h="100%">
                <Skeleton isLoaded={isLoaded}>
                    <Heading fontSize={{ base: "xl", lg: "md" }} fontWeight={600} color={color} lineHeight="base">
                        {label}
                    </Heading>
                </Skeleton>
                <Spacer />
                <Skeleton isLoaded={isLoaded} my={!isLoaded ? 1 : 0}>
                    <Heading fontWeight={600} fontSize={{ base: "3xl", lg: '2xl' }} color={numColor} lineHeight="base">
                        {(value && value) || '100%'}{num !== true && "%"}
                    </Heading>
                </Skeleton>
            </Flex>
            <Box ml={1} display={{ base: 'block', sm: 'none', md: 'block', }}>
                {icon}
            </Box>
        </Flex>

    );
};

export default RateStat;
