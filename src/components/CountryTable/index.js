import { Box, Flex, Spacer, useColorModeValue, Heading, Skeleton, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CountryTable = ({ data, isLoading, SearchController, SearchISO3 }) => {

    const [CountryData, setCountryData] = useState(null);

    useEffect(() => {
        if (data && data !== null) {
            setCountryData(data);
        }
    }, [data]);

    const bg = useColorModeValue("white", "gray.800");
    const bg2 = useColorModeValue("gray.50", "gray.700");

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
                <hr />
                <Skeleton isLoaded={!isLoading}>
                    <Box w="100%" minW="230px" h={{ base: "300px", lg: "680px" }} overflowY="scroll" overflowX="hidden">
                        {CountryData !== null && CountryData.filter((val) => {
                            return val.properties.flag !== '';
                        }).sort((a, b) => {
                            return parseFloat(b.properties[Data].replace(/[^0-9-.]/g, '')) - parseFloat(a.properties[Data].replace(/[^0-9-.]/g, ''));
                        }).map((val, key) => {
                            return (
                                <div key={key}>
                                    <Flex
                                        bg={SearchISO3 === val.properties.ISO_A3 ? bg2 : bg}
                                        title={'Click to view ' + val.properties.ADMIN + ' summary'}
                                        onClick={e => {
                                            e.target.value = val.properties.ISO_A3;
                                            SearchController(e, val.properties.ADMIN);
                                        }}
                                        cursor="pointer"
                                        flexDirection="row"
                                        alignItems="center"
                                        p={2}
                                        _hover={{
                                            bg: bg2
                                        }}
                                    >
                                        <Heading mr={1} size="xs" minW="28px" fontWeight={500}>{key + 1}.</Heading>
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
