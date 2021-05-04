import { Skeleton, SimpleGrid } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { options } from './options';
import React from 'react';

const DataChart = ({ isLoading, data }) => {
    return (
        <SimpleGrid columns={1}>
            <Skeleton
                position="relative"
                isLoaded={!isLoading && data}
                w="100%"
                h={300}>
                <Bar
                    height={150}
                    data={data && data}
                    options={options}
                />
            </Skeleton>
        </SimpleGrid>
    );
};

export default DataChart;
