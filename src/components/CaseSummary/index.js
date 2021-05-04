import { SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react';
import DataChart from './DataChart';
import DataStats from './DataStats';
import React, { useEffect, useState } from 'react';

const CaseSummary = ({ data, chartData, searchTerm }) => {

    const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
    const [summaryIsLoading, setSummaryIsLoading] = useState(true);

    useEffect(() => {
        if (data && chartData) {
            setSummaryIsLoading(false);
        } else {
            setSummaryIsLoading(true);
        }
    }, [data, chartData]);

    useEffect(() => {
        setSummaryIsLoading(true);
    }, [searchTerm]);

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={3}>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg} display="flex" flexDir="column">
                <DataStats
                    label="Total Confirmed"
                    data={data !== null && data.cases}
                    newData={data !== null && data.newCases}
                    isLoading={summaryIsLoading}
                />
                <DataChart data={data !== null && chartData.newCases} isLoading={summaryIsLoading} />
            </Box>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg} display="flex" flexDir="column">
                <DataStats
                    label="Active Cases"
                    data={data !== null && data.active}
                    newData={data !== null && data.newActive}
                    isLoading={summaryIsLoading}
                />
                <DataChart data={data !== null && chartData.newActive} isLoading={summaryIsLoading} />
            </Box>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg} display="flex" flexDir="column">
                <DataStats
                    inverted={true}
                    label="Total Recovered"
                    data={data !== null && data.recovered}
                    newData={data !== null && data.newRecovered}
                    isLoading={summaryIsLoading}
                />
                <DataChart data={data !== null && chartData.newRecovered} isLoading={summaryIsLoading} />
            </Box>
            <Box rounded='xl' boxShadow='xl' p={3} bg={bg} display="flex" flexDir="column">
                <DataStats
                    label="Total Deaths"
                    data={data !== null && data.deaths}
                    newData={data !== null && data.newDeaths}
                    isLoading={summaryIsLoading}
                />
                <DataChart data={data !== null && chartData.newDeaths} isLoading={summaryIsLoading} />
            </Box>
        </SimpleGrid >
    );
};

export default CaseSummary;
