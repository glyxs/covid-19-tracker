import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Skeleton, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const DataStats = ({ label, data, newData, isLoading, inverted }) => {

    const color = useColorModeValue("gray.600", "gray.400");

    return (
        <Stat>
            <StatLabel fontSize={{ base: "xl", lg: "md" }} color={color}>
                {label}
            </StatLabel>
            <Skeleton isLoaded={!isLoading && data}>
                <StatNumber fontSize={{ base: "3xl", lg: '2xl' }}>
                    {(data && data.value.toLocaleString()) || '1234567'}
                </StatNumber>
                <StatHelpText>
                    <StatArrow
                        type={newData && newData.type}
                        color={
                            newData && newData.type === 'increase' ? !inverted ? 'red.500' : 'green.500' : !inverted ? 'green.500' : 'red.500'
                        } />
                    {newData && !isNaN(newData.relDiff) ? newData.relDiff.toFixed(2) : '0'}% Daily Change
                </StatHelpText>
            </Skeleton>
        </Stat >
    );
};

export default DataStats;
