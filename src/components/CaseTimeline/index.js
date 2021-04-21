import { Box, useColorModeValue } from '@chakra-ui/react';
import TimelineControls from './TimelineControls';
import DataChart from './DataChart';
import React from 'react';

const CaseTimeline = ({ data, isLoading, PeriodSelector, CaseTypeSelector, SortController }) => {

    const bg = useColorModeValue("white", "gray.800");

    return (
        <Box
            rounded='xl'
            boxShadow='xl'
            p={3}
            bg={bg}
            my={6}>
            <TimelineControls
                PeriodSelector={PeriodSelector}
                CaseTypeSelector={CaseTypeSelector}
                SortController={SortController} />
            <DataChart
                data={data}
                isLoading={isLoading}
            />
        </Box>
    );
};

export default CaseTimeline;
