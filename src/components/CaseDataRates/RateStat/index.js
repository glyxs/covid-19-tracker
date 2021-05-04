import { Skeleton, useColorModeValue, Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import React from 'react';

const RateStat = ({ label, value, icon, isLoading, num, numColor }) => {

    const color = useColorModeValue("color.secondaryLight", "color.secondaryDark");

    return (

        <Flex alignItems="center" justifyContent="space-between" h="100%">
            <Flex direction="column" h="100%">
                <Heading fontSize={{ base: "xl", lg: "md" }} fontWeight={600} color={color} lineHeight="base">
                    {label}
                </Heading>
                <Spacer />
                <Skeleton isLoaded={!isLoading && value}>
                    <Heading fontWeight={600} fontSize={{ base: "3xl", lg: '4xl' }} color={numColor} lineHeight="base">
                        {(value && value.toLocaleString()) || '100'}{num !== true && "%"}
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
