import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Skeleton, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const DataStats = ({ label, number, type, isLoading, inverted, helper }) => {

    const color = useColorModeValue("gray.600", "gray.400");

    return (
        <Stat>
            <Skeleton isLoaded={!isLoading}>
                <StatLabel fontSize={{ base: "xl", lg: "md" }} color={color}>
                    {label}
                </StatLabel>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} my={isLoading ? 1 : 0}>
                <StatNumber fontSize={{ base: "3xl", lg: '2xl' }}>
                    {(number && number) || '1234567'}
                </StatNumber>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
                <StatHelpText>
                    <StatArrow
                        type={type}
                        color={
                            type === 'increase' ? !inverted ? 'red.500' : 'green.500' : !inverted ? 'green.500' : 'red.500'
                        } />
                    {(helper && helper.toFixed(2)) || '0'}% Daily Change
                </StatHelpText>
            </Skeleton>
        </Stat >
    );
};

export default DataStats;
