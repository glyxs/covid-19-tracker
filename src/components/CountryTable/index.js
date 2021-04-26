import { Box, Flex, Spacer, useColorModeValue, Heading, Skeleton, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CountryTable = ({ data, isLoading }) => {

    const [CountryData, setCountryData] = useState(null);

    useEffect(() => {
        if (data && data !== null) {
            setCountryData(data);
        }
    }, [data]);

    const bg = useColorModeValue("white", "gray.800");

    const [Data, setData] = useState('confirmed');
    const CaseTypeSelector = (e) => {
        setData(e.target.value);
    };

    return (
        <Box
            rounded='xl'
            boxShadow='xl'
            p={3} bg={bg}
            my={6}
        >
            <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap">
                <Heading
                    flex="80%"
                    fontWeight={600}
                    as='h3'
                    size='md'
                    mb={3}>
                    Top Countries
                </Heading>
                <Select
                    onChange={CaseTypeSelector}
                    flex="10%"
                    size='sm'
                    rounded='md'
                    minW={110}
                    mb={3}>
                    <option value="confirmed">Confirmed</option>
                    <option value="active">Active</option>
                    <option value="recovered">Recovered</option>
                    <option value="deaths">Deaths</option>
                </Select>
            </Box>

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
                            return parseFloat(b.properties[Data].replace(/[^0-9-.]/g, '')) - parseFloat(a.properties[Data].replace(/[^0-9-.]/g, ''));
                        }).map((val, key) => {
                            return (
                                <div key={key}>
                                    <Flex flexDirection="row" alignItems="center" my={2} flexWrap="nowrap">
                                        <img
                                            style={{ borderRadius: "3px" }}
                                            src={val.properties.flag}
                                            alt={val.properties.ADMIN}
                                            height="20px" width="34px" />
                                        <Heading mx={3} size="xs" fontWeight={500}>{val.properties.ADMIN}</Heading>
                                        <Spacer />
                                        <Heading size="xs" mx={1}>{val.properties[Data]}</Heading>
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
