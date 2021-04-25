import { Stat, StatLabel, StatNumber, Skeleton, useColorModeValue, Flex, Box } from '@chakra-ui/react';
import React from 'react';

const RateStat = ({ label, value, icon, isLoaded, num, numColor }) => {

    const color = useColorModeValue("gray.600", "gray.400");

    return (
        <Flex alignItems="center">
            <Stat>
                <Skeleton isLoaded={isLoaded}>
                    <StatLabel fontSize={{ base: "xl", lg: "md" }} color={color}>
                        {label}
                    </StatLabel>
                </Skeleton>
                <Skeleton isLoaded={isLoaded} my={!isLoaded ? 1 : 0}>
                    <StatNumber fontSize={{ base: "3xl", lg: '2xl' }} color={numColor}>
                        {(value && value) || '100%'}{num !== true && "%"}
                    </StatNumber>
                </Skeleton>
            </Stat>
            <Box ml={1}>
                {icon}
            </Box>
        </Flex>

    );
};

export default RateStat;
