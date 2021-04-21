import { SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react';
import DataChart from './DataChart';
import DataStats from './DataStats';
import React from 'react';

const CaseSummary = ({ data, chartData, isPending }) => {

    const bg = useColorModeValue("white", "gray.800");

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={3}>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg} >
                <DataStats
                    label="Total Confirmed"
                    number={data && data[29].cases.toLocaleString()}
                    type={data && data[29].helpers.newCases.type}
                    helper={data && data[29].helpers.newCases.data}
                    isLoading={isPending}

                />
                <DataChart isLoading={isPending} data={chartData && chartData.newCases} />
            </Box>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg}>
                <DataStats
                    label="Active Cases"
                    number={data && data[29].active.toLocaleString()}
                    type={data && data[29].helpers.newActive.type}
                    helper={data && data[29].helpers.newActive.data}
                    isLoading={isPending}
                />
                <DataChart isLoading={isPending} data={chartData && chartData.newActive} />
            </Box>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg}>
                <DataStats
                    label="Total Recovered"
                    inverted={true}
                    number={data && data[29].recovered.toLocaleString()}
                    type={data && data[29].helpers.newRecovered.type}
                    helper={data && data[29].helpers.newRecovered.data}
                    isLoading={isPending}
                />
                <DataChart isLoading={isPending} data={chartData && chartData.newRecovered} />
            </Box>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg}>
                <DataStats
                    label="Total Deaths"
                    number={data && data[29].deaths.toLocaleString()}
                    type={data && data[29].helpers.newDeaths.type}
                    helper={data && data[29].helpers.newDeaths.data}
                    isLoading={isPending}
                />
                <DataChart isLoading={isPending} data={chartData && chartData.newDeaths} />
            </Box>
        </SimpleGrid >
    );
};

export default CaseSummary;
