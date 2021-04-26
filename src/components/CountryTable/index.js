import { Box, Flex, Spacer, useColorModeValue, Heading, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CountryTable = ({ data, isLoading }) => {

    const [CountryData, setCountryData] = useState(null);

    useEffect(() => {
        if (data && data !== null) {
            setCountryData(data);
        }
    }, [data]);

    const bg = useColorModeValue("white", "gray.800");

    return (
        <Box
            rounded='xl'
            boxShadow='xl'
            p={3} bg={bg}
            my={6}
        >
            <Heading
                fontWeight={600}
                as='h3'
                size='md'
                mb={3}>
                Top Countries
                </Heading>
            <Box
                display="flex"
                flexDirection="column">
                <Flex
                    flexDirection="row"
                    my={1}
                    color="GrayText">
                    <Heading size="sm" fontWeight={500}>Country</Heading>
                    <Spacer />
                    <Heading size="sm" fontWeight={500}>Confirmed</Heading>
                </Flex>
                <hr />
                <Skeleton isLoaded={!isLoading}>
                    <Box w="100%" minW="230px" h={{ base: "300px", lg: "700px" }} overflowY="scroll" overflowX="hidden">
                        {CountryData !== null && CountryData.filter((val) => {
                            return val.properties.flag !== '';
                        }).sort((a, b) => {
                            return parseFloat(b.properties.confirmed.replace(/[^0-9-.]/g, '')) - parseFloat(a.properties.confirmed.replace(/[^0-9-.]/g, ''));
                        }).map((val, key) => {
                            return (
                                <div key={key}>
                                    <Flex flexDirection="row" alignItems="center" my={1} flexWrap="nowrap">
                                        <img
                                            style={{ borderRadius: "3px" }}
                                            src={val.properties.flag}
                                            alt={val.properties.ADMIN}
                                            height="20px" width="34px" />
                                        <Heading mx={3} size="xs" fontWeight={500}>{val.properties.ADMIN}</Heading>
                                        <Spacer />
                                        <Heading size="xs" mx={1}>{val.properties.confirmed}</Heading>
                                    </Flex>
                                    <hr />
                                </div>
                            );
                        })}
                    </Box>
                </Skeleton>
            </Box >
        </Box>
    );
};

export default CountryTable;
